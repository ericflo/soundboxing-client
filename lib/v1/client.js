const fetch = require('isomorphic-fetch');
const queryString = require('query-string');
const { SBPunchList, SBFrameList } = require('./serialization');
const FormData = require('isomorphic-form-data');
const StringToStream = require('string-to-stream');

export class SoundboxingClient {
  constructor(ctx) {
    this.authTokenID = ctx.authTokenID || null;
    this.authAccount = ctx.authAccount || null;
    this.followUsers = ctx.followUsers || null;
    this.apiBase = ctx.apiBase || 'https://api.soundboxing.co';
  }

  serialize() {
    return {
      id: this.authTokenID,
      account: this.authAccount,
      followUsers: this.followUsers,
      apiBase: this.apiBase,
    };
  }

  async authSteam(ticket) {
    const resp = await this.post(
      '/auth/steam',
      null,
      JSON.stringify({ ticket })
    );
    if (!resp.auth_token || !resp.auth_token.id) {
      throw new Error('Got no token id in response: ' + JSON.stringify(resp));
    }
    this.authTokenID = resp.auth_token.id;
    this.authAccount = resp.auth_user;
    return { user: resp.auth_user, token: resp.auth_token };
  }

  async authItch(accessToken) {
    const resp = await this.post(
      '/auth/itch',
      null,
      JSON.stringify({ access_token: accessToken })
    );
    if (!resp.auth_token || !resp.auth_token.id) {
      throw new Error('Got no token id in response: ' + JSON.stringify(resp));
    }
    this.authTokenID = resp.auth_token.id;
    this.authAccount = resp.auth_user;
    return { user: resp.auth_user, token: resp.auth_token };
  }

  async authInternal(body) {
    const resp = await this.post(
      '/auth/steam/internal',
      null,
      JSON.stringify(body)
    );
    if (!resp.auth_token || !resp.auth_token.id) {
      throw new Error('Got no token id in response: ' + JSON.stringify(resp));
    }
    return { user: resp.auth_user, token: resp.auth_token };
  }

  async getAuthAccount() {
    if (this.authAccount) {
      return this.authAccount;
    }
    const resp = await this.get('/auth/user');
    this.authAccount = resp.user;
    return this.authAccount;
  }

  async authUserFollows() {
    if (this.followUsers) {
      return this.followUsers;
    }
    const resp = await this.get('/users/followed-by/me');
    const followUsers = {};
    (resp.users || []).forEach(user => {
      followUsers[user.id] = user;
    });
    this.followUsers = followUsers;
    return followUsers;
  }

  async createUserFollow(user) {
    const resp = await this.post(
      `/user/id/${user.id}/follow`,
      { source: 'webwww' },
      JSON.stringify({})
    );
    this.followUsers[user.id] = user;
    return resp;
  }

  async deleteUserFollow(id) {
    const resp = await this.del(`/user/id/${id}/follow`, { source: 'webwww' });
    delete this.followUsers[id];
    return resp;
  }

  async latestChallenges(featuredOnly, limit) {
    let extra = {};
    if (limit) {
      extra['limit'] = limit;
    }
    if (featuredOnly) {
      extra['featured_only'] = 't';
    }
    const resp = await this.get('/performances/latest', extra);
    return resp;
  }

  async topChallenges(rank, period, limit) {
    let extra = { time_dilation: 't' };
    if (limit) {
      extra['limit'] = limit;
    }
    const resp = await this.get(
      `/performances/top/by-${rank}/${period}`,
      extra
    );
    return resp;
  }

  async searchChallenges(query, limit) {
    const extra = {
      limit: limit || 10,
      offset: 0,
      query: query,
    };
    const resp = await this.get('/performances/latest', extra);
    return resp;
  }

  async topPlaylists(rank, period, limit) {
    let extra = {};
    if (limit) {
      extra['limit'] = limit;
    }
    const resp = await this.get(
      `/perfplaylist/top/by-${rank}/${period}`,
      extra
    );
    return resp;
  }

  async searchSongs(query, limit) {
    const extra = {
      limit: limit || 10,
      offset: 0,
      q: query,
    };
    const resp = await this.get('/youtube/search', extra);
    // Fix up performance ids, not sure why it's not working properly as is
    if (resp.results && resp.performances) {
      const byYoutubeId = {};
      resp.performances.forEach(perf => {
        if (byYoutubeId[perf.youtube_id]) {
          byYoutubeId[perf.youtube_id].push(perf.id);
        } else {
          byYoutubeId[perf.youtube_id] = [perf.id];
        }
      });
      resp.results = resp.results.map(result => {
        result.performance_ids = byYoutubeId[result.youtube_id];
        return result;
      });
    }
    return resp;
  }

  async playlistById(id) {
    const resp = await this.get(`/perfplaylist/id/${id}`);
    return resp;
  }

  async challengeById(id) {
    const noPunches = true;
    const query = noPunches ? { no_punches: 't' } : {};
    const resp = await this.get('/performance/id/' + id, query);
    return resp;
  }

  async userByForeignIds(steamId, oculusId) {
    let params = {};
    if (steamId) {
      params['steam_id'] = steamId;
    }
    if (oculusId) {
      params['oculus_id'] = oculusId;
    }
    const resp = await this.get('/user/foreign-ids', params);
    return resp;
  }

  async userScores(id, limit) {
    const resp = await this.get(`/score/latest/user/${id}`, limitParams(limit));
    return resp;
  }

  async userFavorites(id, limit) {
    const resp = await this.get(
      `/performances/favorite/user/${id}`,
      limitParams(limit)
    );
    return resp;
  }

  async userChallenges(id, limit) {
    const resp = await this.get(`/performances/user/${id}`, limitParams(limit));
    return resp;
  }

  async userPlaylists(id, limit) {
    const resp = await this.get(`/perfplaylist/user/${id}`, limitParams(limit));
    return resp;
  }

  async userFollowing(id, limit) {
    const resp = await this.get(`/user/id/${id}/friends`, limitParams(limit));
    return resp;
  }

  async userFollowers(id, limit) {
    const resp = await this.get(`/user/id/${id}/followers`, limitParams(limit));
    return resp;
  }

  async latestUsers(limit) {
    const resp = await this.get(`/users/latest`, limitParams(limit));
    return resp;
  }

  async feed(limit) {
    const resp = await this.get('/feed', limitParams(limit));
    return resp;
  }

  async notifications(limit) {
    const resp = await this.get('/events', limitParams(limit));
    return resp;
  }

  async deleteChallenge(id) {
    const resp = await this.del(`/performance/id/${id}`);
    return resp;
  }

  async createFavorite(id) {
    const resp = await this.post(
      `/performance/id/${id}/favorite`,
      null,
      JSON.stringify({})
    );
    return resp;
  }

  async deleteFavorite(id) {
    const resp = await this.del(`/performance/id/${id}/favorite`);
    return resp;
  }

  async updateChallengeFeatured(id, featured) {
    const resp = await this.post(
      `/performance/featured`,
      null,
      JSON.stringify({ performance_id: id, featured })
    );
    return resp;
  }

  async topScores(id, limit) {
    const resp = await this.get(`/score/top/${id}`, limitParams(limit));
    return resp;
  }

  async challengePunches(challenge) {
    const resp = await fetch(challenge.punches_url);
    const buf = await resp.arrayBuffer();
    const punchList = SBPunchList.decode(new Uint8Array(buf));
    return punchList.punches;
  }

  async challengeFrames(challenge) {
    const resp = await fetch(challenge.frames_url);
    const buf = await resp.arrayBuffer();
    const frameList = SBFrameList.decode(new Uint8Array(buf));
    return frameList.frames;
  }

  async syncSteamFollows(steamIds) {
    const data = JSON.stringify({ steam_ids: steamIds });
    const body = new FormData();
    body.append('data', StringToStream(data), {
      filename: 'data',
      filepath: 'data',
      contentType: 'application/octet-stream',
      knownLength: data.length,
    });
    const resp = await this.post('/follows/steam', null, body);
    const followUsers = {};
    (resp.users || []).forEach(user => {
      followUsers[user.id] = user;
    });
    this.followUsers = followUsers;
    return { follows: resp.follows, users: resp.users };
  }

  // Supporting and utility functions follow

  headers() {
    const headers = { 'Content-Type': 'application/json' };
    if (this.authTokenID) {
      headers['X-Auth-Token-ID'] = this.authTokenID;
    }
    return headers;
  }

  get(path, params) {
    const url =
      this.apiBase + path + (params ? '?' + queryString.stringify(params) : '');
    return fetchJSON(url, { headers: this.headers() });
  }

  post(path, params, body) {
    const url =
      this.apiBase + path + (params ? '?' + queryString.stringify(params) : '');
    const opts = { headers: this.headers(), method: 'post' };
    if (body instanceof FormData) {
      delete opts.headers['Content-Type'];
    }
    if (body) {
      opts['body'] = body; // TODO: JSON.stringify if not string already
    }
    return fetchJSON(url, opts);
  }

  del(path, params) {
    const url =
      this.apiBase + path + (params ? '?' + queryString.stringify(params) : '');
    const opts = { headers: this.headers(), method: 'delete' };
    return fetchJSON(url, opts);
  }
}

const limitParams = limit => {
  let params = {};
  if (limit) {
    params['limit'] = limit;
  }
  return params;
};

const fetchJSON = async (url, opts) => {
  const res = await fetch(url, opts);
  const json = await res.json();
  if (json && json['error']) {
    throw new Error(json['error']);
  }
  return json;
};
