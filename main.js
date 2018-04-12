if (typeof window !== 'undefined') {
  module.exports = require('./build/lib.web');
} else {
  module.exports = require('./build/lib.node');
}
