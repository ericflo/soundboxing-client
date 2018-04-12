/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.SBFrame = (function() {
    
        /**
         * Properties of a SBFrame.
         * @exports ISBFrame
         * @interface ISBFrame
         * @property {number|null} [Timestamp] SBFrame Timestamp
         * @property {number|null} [UserPosX] SBFrame UserPosX
         * @property {number|null} [UserPosY] SBFrame UserPosY
         * @property {number|null} [UserPosZ] SBFrame UserPosZ
         * @property {number|null} [UserRotX] SBFrame UserRotX
         * @property {number|null} [UserRotY] SBFrame UserRotY
         * @property {number|null} [UserRotZ] SBFrame UserRotZ
         * @property {number|null} [HeadPosX] SBFrame HeadPosX
         * @property {number|null} [HeadPosY] SBFrame HeadPosY
         * @property {number|null} [HeadPosZ] SBFrame HeadPosZ
         * @property {number|null} [HeadRotX] SBFrame HeadRotX
         * @property {number|null} [HeadRotY] SBFrame HeadRotY
         * @property {number|null} [HeadRotZ] SBFrame HeadRotZ
         * @property {number|null} [LeftHandPosX] SBFrame LeftHandPosX
         * @property {number|null} [LeftHandPosY] SBFrame LeftHandPosY
         * @property {number|null} [LeftHandPosZ] SBFrame LeftHandPosZ
         * @property {number|null} [LeftHandRotX] SBFrame LeftHandRotX
         * @property {number|null} [LeftHandRotY] SBFrame LeftHandRotY
         * @property {number|null} [LeftHandRotZ] SBFrame LeftHandRotZ
         * @property {number|null} [RightHandPosX] SBFrame RightHandPosX
         * @property {number|null} [RightHandPosY] SBFrame RightHandPosY
         * @property {number|null} [RightHandPosZ] SBFrame RightHandPosZ
         * @property {number|null} [RightHandRotX] SBFrame RightHandRotX
         * @property {number|null} [RightHandRotY] SBFrame RightHandRotY
         * @property {number|null} [RightHandRotZ] SBFrame RightHandRotZ
         * @property {number|null} [EyePosX] SBFrame EyePosX
         * @property {number|null} [EyePosY] SBFrame EyePosY
         * @property {number|null} [EyePosZ] SBFrame EyePosZ
         * @property {number|null} [EyeRotX] SBFrame EyeRotX
         * @property {number|null} [EyeRotY] SBFrame EyeRotY
         * @property {number|null} [EyeRotZ] SBFrame EyeRotZ
         * @property {Array.<number>|null} [AudioSamples] SBFrame AudioSamples
         */
    
        /**
         * Constructs a new SBFrame.
         * @exports SBFrame
         * @classdesc Represents a SBFrame.
         * @implements ISBFrame
         * @constructor
         * @param {ISBFrame=} [properties] Properties to set
         */
        function SBFrame(properties) {
            this.AudioSamples = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBFrame Timestamp.
         * @member {number} Timestamp
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.Timestamp = 0;
    
        /**
         * SBFrame UserPosX.
         * @member {number} UserPosX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.UserPosX = 0;
    
        /**
         * SBFrame UserPosY.
         * @member {number} UserPosY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.UserPosY = 0;
    
        /**
         * SBFrame UserPosZ.
         * @member {number} UserPosZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.UserPosZ = 0;
    
        /**
         * SBFrame UserRotX.
         * @member {number} UserRotX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.UserRotX = 0;
    
        /**
         * SBFrame UserRotY.
         * @member {number} UserRotY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.UserRotY = 0;
    
        /**
         * SBFrame UserRotZ.
         * @member {number} UserRotZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.UserRotZ = 0;
    
        /**
         * SBFrame HeadPosX.
         * @member {number} HeadPosX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.HeadPosX = 0;
    
        /**
         * SBFrame HeadPosY.
         * @member {number} HeadPosY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.HeadPosY = 0;
    
        /**
         * SBFrame HeadPosZ.
         * @member {number} HeadPosZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.HeadPosZ = 0;
    
        /**
         * SBFrame HeadRotX.
         * @member {number} HeadRotX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.HeadRotX = 0;
    
        /**
         * SBFrame HeadRotY.
         * @member {number} HeadRotY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.HeadRotY = 0;
    
        /**
         * SBFrame HeadRotZ.
         * @member {number} HeadRotZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.HeadRotZ = 0;
    
        /**
         * SBFrame LeftHandPosX.
         * @member {number} LeftHandPosX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.LeftHandPosX = 0;
    
        /**
         * SBFrame LeftHandPosY.
         * @member {number} LeftHandPosY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.LeftHandPosY = 0;
    
        /**
         * SBFrame LeftHandPosZ.
         * @member {number} LeftHandPosZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.LeftHandPosZ = 0;
    
        /**
         * SBFrame LeftHandRotX.
         * @member {number} LeftHandRotX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.LeftHandRotX = 0;
    
        /**
         * SBFrame LeftHandRotY.
         * @member {number} LeftHandRotY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.LeftHandRotY = 0;
    
        /**
         * SBFrame LeftHandRotZ.
         * @member {number} LeftHandRotZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.LeftHandRotZ = 0;
    
        /**
         * SBFrame RightHandPosX.
         * @member {number} RightHandPosX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.RightHandPosX = 0;
    
        /**
         * SBFrame RightHandPosY.
         * @member {number} RightHandPosY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.RightHandPosY = 0;
    
        /**
         * SBFrame RightHandPosZ.
         * @member {number} RightHandPosZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.RightHandPosZ = 0;
    
        /**
         * SBFrame RightHandRotX.
         * @member {number} RightHandRotX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.RightHandRotX = 0;
    
        /**
         * SBFrame RightHandRotY.
         * @member {number} RightHandRotY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.RightHandRotY = 0;
    
        /**
         * SBFrame RightHandRotZ.
         * @member {number} RightHandRotZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.RightHandRotZ = 0;
    
        /**
         * SBFrame EyePosX.
         * @member {number} EyePosX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.EyePosX = 0;
    
        /**
         * SBFrame EyePosY.
         * @member {number} EyePosY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.EyePosY = 0;
    
        /**
         * SBFrame EyePosZ.
         * @member {number} EyePosZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.EyePosZ = 0;
    
        /**
         * SBFrame EyeRotX.
         * @member {number} EyeRotX
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.EyeRotX = 0;
    
        /**
         * SBFrame EyeRotY.
         * @member {number} EyeRotY
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.EyeRotY = 0;
    
        /**
         * SBFrame EyeRotZ.
         * @member {number} EyeRotZ
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.EyeRotZ = 0;
    
        /**
         * SBFrame AudioSamples.
         * @member {Array.<number>} AudioSamples
         * @memberof SBFrame
         * @instance
         */
        SBFrame.prototype.AudioSamples = $util.emptyArray;
    
        /**
         * Creates a new SBFrame instance using the specified properties.
         * @function create
         * @memberof SBFrame
         * @static
         * @param {ISBFrame=} [properties] Properties to set
         * @returns {SBFrame} SBFrame instance
         */
        SBFrame.create = function create(properties) {
            return new SBFrame(properties);
        };
    
        /**
         * Encodes the specified SBFrame message. Does not implicitly {@link SBFrame.verify|verify} messages.
         * @function encode
         * @memberof SBFrame
         * @static
         * @param {ISBFrame} message SBFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.Timestamp);
            if (message.UserPosX != null && message.hasOwnProperty("UserPosX"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.UserPosX);
            if (message.UserPosY != null && message.hasOwnProperty("UserPosY"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.UserPosY);
            if (message.UserPosZ != null && message.hasOwnProperty("UserPosZ"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.UserPosZ);
            if (message.UserRotX != null && message.hasOwnProperty("UserRotX"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.UserRotX);
            if (message.UserRotY != null && message.hasOwnProperty("UserRotY"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.UserRotY);
            if (message.UserRotZ != null && message.hasOwnProperty("UserRotZ"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.UserRotZ);
            if (message.HeadPosX != null && message.hasOwnProperty("HeadPosX"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.HeadPosX);
            if (message.HeadPosY != null && message.hasOwnProperty("HeadPosY"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.HeadPosY);
            if (message.HeadPosZ != null && message.hasOwnProperty("HeadPosZ"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.HeadPosZ);
            if (message.HeadRotX != null && message.hasOwnProperty("HeadRotX"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.HeadRotX);
            if (message.HeadRotY != null && message.hasOwnProperty("HeadRotY"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.HeadRotY);
            if (message.HeadRotZ != null && message.hasOwnProperty("HeadRotZ"))
                writer.uint32(/* id 13, wireType 5 =*/109).float(message.HeadRotZ);
            if (message.LeftHandPosX != null && message.hasOwnProperty("LeftHandPosX"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.LeftHandPosX);
            if (message.LeftHandPosY != null && message.hasOwnProperty("LeftHandPosY"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.LeftHandPosY);
            if (message.LeftHandPosZ != null && message.hasOwnProperty("LeftHandPosZ"))
                writer.uint32(/* id 16, wireType 5 =*/133).float(message.LeftHandPosZ);
            if (message.LeftHandRotX != null && message.hasOwnProperty("LeftHandRotX"))
                writer.uint32(/* id 17, wireType 5 =*/141).float(message.LeftHandRotX);
            if (message.LeftHandRotY != null && message.hasOwnProperty("LeftHandRotY"))
                writer.uint32(/* id 18, wireType 5 =*/149).float(message.LeftHandRotY);
            if (message.LeftHandRotZ != null && message.hasOwnProperty("LeftHandRotZ"))
                writer.uint32(/* id 19, wireType 5 =*/157).float(message.LeftHandRotZ);
            if (message.RightHandPosX != null && message.hasOwnProperty("RightHandPosX"))
                writer.uint32(/* id 20, wireType 5 =*/165).float(message.RightHandPosX);
            if (message.RightHandPosY != null && message.hasOwnProperty("RightHandPosY"))
                writer.uint32(/* id 21, wireType 5 =*/173).float(message.RightHandPosY);
            if (message.RightHandPosZ != null && message.hasOwnProperty("RightHandPosZ"))
                writer.uint32(/* id 22, wireType 5 =*/181).float(message.RightHandPosZ);
            if (message.RightHandRotX != null && message.hasOwnProperty("RightHandRotX"))
                writer.uint32(/* id 23, wireType 5 =*/189).float(message.RightHandRotX);
            if (message.RightHandRotY != null && message.hasOwnProperty("RightHandRotY"))
                writer.uint32(/* id 24, wireType 5 =*/197).float(message.RightHandRotY);
            if (message.RightHandRotZ != null && message.hasOwnProperty("RightHandRotZ"))
                writer.uint32(/* id 25, wireType 5 =*/205).float(message.RightHandRotZ);
            if (message.EyePosX != null && message.hasOwnProperty("EyePosX"))
                writer.uint32(/* id 26, wireType 5 =*/213).float(message.EyePosX);
            if (message.EyePosY != null && message.hasOwnProperty("EyePosY"))
                writer.uint32(/* id 27, wireType 5 =*/221).float(message.EyePosY);
            if (message.EyePosZ != null && message.hasOwnProperty("EyePosZ"))
                writer.uint32(/* id 28, wireType 5 =*/229).float(message.EyePosZ);
            if (message.EyeRotX != null && message.hasOwnProperty("EyeRotX"))
                writer.uint32(/* id 29, wireType 5 =*/237).float(message.EyeRotX);
            if (message.EyeRotY != null && message.hasOwnProperty("EyeRotY"))
                writer.uint32(/* id 30, wireType 5 =*/245).float(message.EyeRotY);
            if (message.EyeRotZ != null && message.hasOwnProperty("EyeRotZ"))
                writer.uint32(/* id 31, wireType 5 =*/253).float(message.EyeRotZ);
            if (message.AudioSamples != null && message.AudioSamples.length) {
                writer.uint32(/* id 32, wireType 2 =*/258).fork();
                for (var i = 0; i < message.AudioSamples.length; ++i)
                    writer.float(message.AudioSamples[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified SBFrame message, length delimited. Does not implicitly {@link SBFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBFrame
         * @static
         * @param {ISBFrame} message SBFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBFrame message from the specified reader or buffer.
         * @function decode
         * @memberof SBFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBFrame} SBFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBFrame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.float();
                    break;
                case 2:
                    message.UserPosX = reader.float();
                    break;
                case 3:
                    message.UserPosY = reader.float();
                    break;
                case 4:
                    message.UserPosZ = reader.float();
                    break;
                case 5:
                    message.UserRotX = reader.float();
                    break;
                case 6:
                    message.UserRotY = reader.float();
                    break;
                case 7:
                    message.UserRotZ = reader.float();
                    break;
                case 8:
                    message.HeadPosX = reader.float();
                    break;
                case 9:
                    message.HeadPosY = reader.float();
                    break;
                case 10:
                    message.HeadPosZ = reader.float();
                    break;
                case 11:
                    message.HeadRotX = reader.float();
                    break;
                case 12:
                    message.HeadRotY = reader.float();
                    break;
                case 13:
                    message.HeadRotZ = reader.float();
                    break;
                case 14:
                    message.LeftHandPosX = reader.float();
                    break;
                case 15:
                    message.LeftHandPosY = reader.float();
                    break;
                case 16:
                    message.LeftHandPosZ = reader.float();
                    break;
                case 17:
                    message.LeftHandRotX = reader.float();
                    break;
                case 18:
                    message.LeftHandRotY = reader.float();
                    break;
                case 19:
                    message.LeftHandRotZ = reader.float();
                    break;
                case 20:
                    message.RightHandPosX = reader.float();
                    break;
                case 21:
                    message.RightHandPosY = reader.float();
                    break;
                case 22:
                    message.RightHandPosZ = reader.float();
                    break;
                case 23:
                    message.RightHandRotX = reader.float();
                    break;
                case 24:
                    message.RightHandRotY = reader.float();
                    break;
                case 25:
                    message.RightHandRotZ = reader.float();
                    break;
                case 26:
                    message.EyePosX = reader.float();
                    break;
                case 27:
                    message.EyePosY = reader.float();
                    break;
                case 28:
                    message.EyePosZ = reader.float();
                    break;
                case 29:
                    message.EyeRotX = reader.float();
                    break;
                case 30:
                    message.EyeRotY = reader.float();
                    break;
                case 31:
                    message.EyeRotZ = reader.float();
                    break;
                case 32:
                    if (!(message.AudioSamples && message.AudioSamples.length))
                        message.AudioSamples = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AudioSamples.push(reader.float());
                    } else
                        message.AudioSamples.push(reader.float());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBFrame} SBFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBFrame message.
         * @function verify
         * @memberof SBFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp !== "number")
                    return "Timestamp: number expected";
            if (message.UserPosX != null && message.hasOwnProperty("UserPosX"))
                if (typeof message.UserPosX !== "number")
                    return "UserPosX: number expected";
            if (message.UserPosY != null && message.hasOwnProperty("UserPosY"))
                if (typeof message.UserPosY !== "number")
                    return "UserPosY: number expected";
            if (message.UserPosZ != null && message.hasOwnProperty("UserPosZ"))
                if (typeof message.UserPosZ !== "number")
                    return "UserPosZ: number expected";
            if (message.UserRotX != null && message.hasOwnProperty("UserRotX"))
                if (typeof message.UserRotX !== "number")
                    return "UserRotX: number expected";
            if (message.UserRotY != null && message.hasOwnProperty("UserRotY"))
                if (typeof message.UserRotY !== "number")
                    return "UserRotY: number expected";
            if (message.UserRotZ != null && message.hasOwnProperty("UserRotZ"))
                if (typeof message.UserRotZ !== "number")
                    return "UserRotZ: number expected";
            if (message.HeadPosX != null && message.hasOwnProperty("HeadPosX"))
                if (typeof message.HeadPosX !== "number")
                    return "HeadPosX: number expected";
            if (message.HeadPosY != null && message.hasOwnProperty("HeadPosY"))
                if (typeof message.HeadPosY !== "number")
                    return "HeadPosY: number expected";
            if (message.HeadPosZ != null && message.hasOwnProperty("HeadPosZ"))
                if (typeof message.HeadPosZ !== "number")
                    return "HeadPosZ: number expected";
            if (message.HeadRotX != null && message.hasOwnProperty("HeadRotX"))
                if (typeof message.HeadRotX !== "number")
                    return "HeadRotX: number expected";
            if (message.HeadRotY != null && message.hasOwnProperty("HeadRotY"))
                if (typeof message.HeadRotY !== "number")
                    return "HeadRotY: number expected";
            if (message.HeadRotZ != null && message.hasOwnProperty("HeadRotZ"))
                if (typeof message.HeadRotZ !== "number")
                    return "HeadRotZ: number expected";
            if (message.LeftHandPosX != null && message.hasOwnProperty("LeftHandPosX"))
                if (typeof message.LeftHandPosX !== "number")
                    return "LeftHandPosX: number expected";
            if (message.LeftHandPosY != null && message.hasOwnProperty("LeftHandPosY"))
                if (typeof message.LeftHandPosY !== "number")
                    return "LeftHandPosY: number expected";
            if (message.LeftHandPosZ != null && message.hasOwnProperty("LeftHandPosZ"))
                if (typeof message.LeftHandPosZ !== "number")
                    return "LeftHandPosZ: number expected";
            if (message.LeftHandRotX != null && message.hasOwnProperty("LeftHandRotX"))
                if (typeof message.LeftHandRotX !== "number")
                    return "LeftHandRotX: number expected";
            if (message.LeftHandRotY != null && message.hasOwnProperty("LeftHandRotY"))
                if (typeof message.LeftHandRotY !== "number")
                    return "LeftHandRotY: number expected";
            if (message.LeftHandRotZ != null && message.hasOwnProperty("LeftHandRotZ"))
                if (typeof message.LeftHandRotZ !== "number")
                    return "LeftHandRotZ: number expected";
            if (message.RightHandPosX != null && message.hasOwnProperty("RightHandPosX"))
                if (typeof message.RightHandPosX !== "number")
                    return "RightHandPosX: number expected";
            if (message.RightHandPosY != null && message.hasOwnProperty("RightHandPosY"))
                if (typeof message.RightHandPosY !== "number")
                    return "RightHandPosY: number expected";
            if (message.RightHandPosZ != null && message.hasOwnProperty("RightHandPosZ"))
                if (typeof message.RightHandPosZ !== "number")
                    return "RightHandPosZ: number expected";
            if (message.RightHandRotX != null && message.hasOwnProperty("RightHandRotX"))
                if (typeof message.RightHandRotX !== "number")
                    return "RightHandRotX: number expected";
            if (message.RightHandRotY != null && message.hasOwnProperty("RightHandRotY"))
                if (typeof message.RightHandRotY !== "number")
                    return "RightHandRotY: number expected";
            if (message.RightHandRotZ != null && message.hasOwnProperty("RightHandRotZ"))
                if (typeof message.RightHandRotZ !== "number")
                    return "RightHandRotZ: number expected";
            if (message.EyePosX != null && message.hasOwnProperty("EyePosX"))
                if (typeof message.EyePosX !== "number")
                    return "EyePosX: number expected";
            if (message.EyePosY != null && message.hasOwnProperty("EyePosY"))
                if (typeof message.EyePosY !== "number")
                    return "EyePosY: number expected";
            if (message.EyePosZ != null && message.hasOwnProperty("EyePosZ"))
                if (typeof message.EyePosZ !== "number")
                    return "EyePosZ: number expected";
            if (message.EyeRotX != null && message.hasOwnProperty("EyeRotX"))
                if (typeof message.EyeRotX !== "number")
                    return "EyeRotX: number expected";
            if (message.EyeRotY != null && message.hasOwnProperty("EyeRotY"))
                if (typeof message.EyeRotY !== "number")
                    return "EyeRotY: number expected";
            if (message.EyeRotZ != null && message.hasOwnProperty("EyeRotZ"))
                if (typeof message.EyeRotZ !== "number")
                    return "EyeRotZ: number expected";
            if (message.AudioSamples != null && message.hasOwnProperty("AudioSamples")) {
                if (!Array.isArray(message.AudioSamples))
                    return "AudioSamples: array expected";
                for (var i = 0; i < message.AudioSamples.length; ++i)
                    if (typeof message.AudioSamples[i] !== "number")
                        return "AudioSamples: number[] expected";
            }
            return null;
        };
    
        /**
         * Creates a SBFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBFrame} SBFrame
         */
        SBFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.SBFrame)
                return object;
            var message = new $root.SBFrame();
            if (object.Timestamp != null)
                message.Timestamp = Number(object.Timestamp);
            if (object.UserPosX != null)
                message.UserPosX = Number(object.UserPosX);
            if (object.UserPosY != null)
                message.UserPosY = Number(object.UserPosY);
            if (object.UserPosZ != null)
                message.UserPosZ = Number(object.UserPosZ);
            if (object.UserRotX != null)
                message.UserRotX = Number(object.UserRotX);
            if (object.UserRotY != null)
                message.UserRotY = Number(object.UserRotY);
            if (object.UserRotZ != null)
                message.UserRotZ = Number(object.UserRotZ);
            if (object.HeadPosX != null)
                message.HeadPosX = Number(object.HeadPosX);
            if (object.HeadPosY != null)
                message.HeadPosY = Number(object.HeadPosY);
            if (object.HeadPosZ != null)
                message.HeadPosZ = Number(object.HeadPosZ);
            if (object.HeadRotX != null)
                message.HeadRotX = Number(object.HeadRotX);
            if (object.HeadRotY != null)
                message.HeadRotY = Number(object.HeadRotY);
            if (object.HeadRotZ != null)
                message.HeadRotZ = Number(object.HeadRotZ);
            if (object.LeftHandPosX != null)
                message.LeftHandPosX = Number(object.LeftHandPosX);
            if (object.LeftHandPosY != null)
                message.LeftHandPosY = Number(object.LeftHandPosY);
            if (object.LeftHandPosZ != null)
                message.LeftHandPosZ = Number(object.LeftHandPosZ);
            if (object.LeftHandRotX != null)
                message.LeftHandRotX = Number(object.LeftHandRotX);
            if (object.LeftHandRotY != null)
                message.LeftHandRotY = Number(object.LeftHandRotY);
            if (object.LeftHandRotZ != null)
                message.LeftHandRotZ = Number(object.LeftHandRotZ);
            if (object.RightHandPosX != null)
                message.RightHandPosX = Number(object.RightHandPosX);
            if (object.RightHandPosY != null)
                message.RightHandPosY = Number(object.RightHandPosY);
            if (object.RightHandPosZ != null)
                message.RightHandPosZ = Number(object.RightHandPosZ);
            if (object.RightHandRotX != null)
                message.RightHandRotX = Number(object.RightHandRotX);
            if (object.RightHandRotY != null)
                message.RightHandRotY = Number(object.RightHandRotY);
            if (object.RightHandRotZ != null)
                message.RightHandRotZ = Number(object.RightHandRotZ);
            if (object.EyePosX != null)
                message.EyePosX = Number(object.EyePosX);
            if (object.EyePosY != null)
                message.EyePosY = Number(object.EyePosY);
            if (object.EyePosZ != null)
                message.EyePosZ = Number(object.EyePosZ);
            if (object.EyeRotX != null)
                message.EyeRotX = Number(object.EyeRotX);
            if (object.EyeRotY != null)
                message.EyeRotY = Number(object.EyeRotY);
            if (object.EyeRotZ != null)
                message.EyeRotZ = Number(object.EyeRotZ);
            if (object.AudioSamples) {
                if (!Array.isArray(object.AudioSamples))
                    throw TypeError(".SBFrame.AudioSamples: array expected");
                message.AudioSamples = [];
                for (var i = 0; i < object.AudioSamples.length; ++i)
                    message.AudioSamples[i] = Number(object.AudioSamples[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SBFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBFrame
         * @static
         * @param {SBFrame} message SBFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AudioSamples = [];
            if (options.defaults) {
                object.Timestamp = 0;
                object.UserPosX = 0;
                object.UserPosY = 0;
                object.UserPosZ = 0;
                object.UserRotX = 0;
                object.UserRotY = 0;
                object.UserRotZ = 0;
                object.HeadPosX = 0;
                object.HeadPosY = 0;
                object.HeadPosZ = 0;
                object.HeadRotX = 0;
                object.HeadRotY = 0;
                object.HeadRotZ = 0;
                object.LeftHandPosX = 0;
                object.LeftHandPosY = 0;
                object.LeftHandPosZ = 0;
                object.LeftHandRotX = 0;
                object.LeftHandRotY = 0;
                object.LeftHandRotZ = 0;
                object.RightHandPosX = 0;
                object.RightHandPosY = 0;
                object.RightHandPosZ = 0;
                object.RightHandRotX = 0;
                object.RightHandRotY = 0;
                object.RightHandRotZ = 0;
                object.EyePosX = 0;
                object.EyePosY = 0;
                object.EyePosZ = 0;
                object.EyeRotX = 0;
                object.EyeRotY = 0;
                object.EyeRotZ = 0;
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                object.Timestamp = options.json && !isFinite(message.Timestamp) ? String(message.Timestamp) : message.Timestamp;
            if (message.UserPosX != null && message.hasOwnProperty("UserPosX"))
                object.UserPosX = options.json && !isFinite(message.UserPosX) ? String(message.UserPosX) : message.UserPosX;
            if (message.UserPosY != null && message.hasOwnProperty("UserPosY"))
                object.UserPosY = options.json && !isFinite(message.UserPosY) ? String(message.UserPosY) : message.UserPosY;
            if (message.UserPosZ != null && message.hasOwnProperty("UserPosZ"))
                object.UserPosZ = options.json && !isFinite(message.UserPosZ) ? String(message.UserPosZ) : message.UserPosZ;
            if (message.UserRotX != null && message.hasOwnProperty("UserRotX"))
                object.UserRotX = options.json && !isFinite(message.UserRotX) ? String(message.UserRotX) : message.UserRotX;
            if (message.UserRotY != null && message.hasOwnProperty("UserRotY"))
                object.UserRotY = options.json && !isFinite(message.UserRotY) ? String(message.UserRotY) : message.UserRotY;
            if (message.UserRotZ != null && message.hasOwnProperty("UserRotZ"))
                object.UserRotZ = options.json && !isFinite(message.UserRotZ) ? String(message.UserRotZ) : message.UserRotZ;
            if (message.HeadPosX != null && message.hasOwnProperty("HeadPosX"))
                object.HeadPosX = options.json && !isFinite(message.HeadPosX) ? String(message.HeadPosX) : message.HeadPosX;
            if (message.HeadPosY != null && message.hasOwnProperty("HeadPosY"))
                object.HeadPosY = options.json && !isFinite(message.HeadPosY) ? String(message.HeadPosY) : message.HeadPosY;
            if (message.HeadPosZ != null && message.hasOwnProperty("HeadPosZ"))
                object.HeadPosZ = options.json && !isFinite(message.HeadPosZ) ? String(message.HeadPosZ) : message.HeadPosZ;
            if (message.HeadRotX != null && message.hasOwnProperty("HeadRotX"))
                object.HeadRotX = options.json && !isFinite(message.HeadRotX) ? String(message.HeadRotX) : message.HeadRotX;
            if (message.HeadRotY != null && message.hasOwnProperty("HeadRotY"))
                object.HeadRotY = options.json && !isFinite(message.HeadRotY) ? String(message.HeadRotY) : message.HeadRotY;
            if (message.HeadRotZ != null && message.hasOwnProperty("HeadRotZ"))
                object.HeadRotZ = options.json && !isFinite(message.HeadRotZ) ? String(message.HeadRotZ) : message.HeadRotZ;
            if (message.LeftHandPosX != null && message.hasOwnProperty("LeftHandPosX"))
                object.LeftHandPosX = options.json && !isFinite(message.LeftHandPosX) ? String(message.LeftHandPosX) : message.LeftHandPosX;
            if (message.LeftHandPosY != null && message.hasOwnProperty("LeftHandPosY"))
                object.LeftHandPosY = options.json && !isFinite(message.LeftHandPosY) ? String(message.LeftHandPosY) : message.LeftHandPosY;
            if (message.LeftHandPosZ != null && message.hasOwnProperty("LeftHandPosZ"))
                object.LeftHandPosZ = options.json && !isFinite(message.LeftHandPosZ) ? String(message.LeftHandPosZ) : message.LeftHandPosZ;
            if (message.LeftHandRotX != null && message.hasOwnProperty("LeftHandRotX"))
                object.LeftHandRotX = options.json && !isFinite(message.LeftHandRotX) ? String(message.LeftHandRotX) : message.LeftHandRotX;
            if (message.LeftHandRotY != null && message.hasOwnProperty("LeftHandRotY"))
                object.LeftHandRotY = options.json && !isFinite(message.LeftHandRotY) ? String(message.LeftHandRotY) : message.LeftHandRotY;
            if (message.LeftHandRotZ != null && message.hasOwnProperty("LeftHandRotZ"))
                object.LeftHandRotZ = options.json && !isFinite(message.LeftHandRotZ) ? String(message.LeftHandRotZ) : message.LeftHandRotZ;
            if (message.RightHandPosX != null && message.hasOwnProperty("RightHandPosX"))
                object.RightHandPosX = options.json && !isFinite(message.RightHandPosX) ? String(message.RightHandPosX) : message.RightHandPosX;
            if (message.RightHandPosY != null && message.hasOwnProperty("RightHandPosY"))
                object.RightHandPosY = options.json && !isFinite(message.RightHandPosY) ? String(message.RightHandPosY) : message.RightHandPosY;
            if (message.RightHandPosZ != null && message.hasOwnProperty("RightHandPosZ"))
                object.RightHandPosZ = options.json && !isFinite(message.RightHandPosZ) ? String(message.RightHandPosZ) : message.RightHandPosZ;
            if (message.RightHandRotX != null && message.hasOwnProperty("RightHandRotX"))
                object.RightHandRotX = options.json && !isFinite(message.RightHandRotX) ? String(message.RightHandRotX) : message.RightHandRotX;
            if (message.RightHandRotY != null && message.hasOwnProperty("RightHandRotY"))
                object.RightHandRotY = options.json && !isFinite(message.RightHandRotY) ? String(message.RightHandRotY) : message.RightHandRotY;
            if (message.RightHandRotZ != null && message.hasOwnProperty("RightHandRotZ"))
                object.RightHandRotZ = options.json && !isFinite(message.RightHandRotZ) ? String(message.RightHandRotZ) : message.RightHandRotZ;
            if (message.EyePosX != null && message.hasOwnProperty("EyePosX"))
                object.EyePosX = options.json && !isFinite(message.EyePosX) ? String(message.EyePosX) : message.EyePosX;
            if (message.EyePosY != null && message.hasOwnProperty("EyePosY"))
                object.EyePosY = options.json && !isFinite(message.EyePosY) ? String(message.EyePosY) : message.EyePosY;
            if (message.EyePosZ != null && message.hasOwnProperty("EyePosZ"))
                object.EyePosZ = options.json && !isFinite(message.EyePosZ) ? String(message.EyePosZ) : message.EyePosZ;
            if (message.EyeRotX != null && message.hasOwnProperty("EyeRotX"))
                object.EyeRotX = options.json && !isFinite(message.EyeRotX) ? String(message.EyeRotX) : message.EyeRotX;
            if (message.EyeRotY != null && message.hasOwnProperty("EyeRotY"))
                object.EyeRotY = options.json && !isFinite(message.EyeRotY) ? String(message.EyeRotY) : message.EyeRotY;
            if (message.EyeRotZ != null && message.hasOwnProperty("EyeRotZ"))
                object.EyeRotZ = options.json && !isFinite(message.EyeRotZ) ? String(message.EyeRotZ) : message.EyeRotZ;
            if (message.AudioSamples && message.AudioSamples.length) {
                object.AudioSamples = [];
                for (var j = 0; j < message.AudioSamples.length; ++j)
                    object.AudioSamples[j] = options.json && !isFinite(message.AudioSamples[j]) ? String(message.AudioSamples[j]) : message.AudioSamples[j];
            }
            return object;
        };
    
        /**
         * Converts this SBFrame to JSON.
         * @function toJSON
         * @memberof SBFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBFrame;
    })();
    
    $root.SBFrameList = (function() {
    
        /**
         * Properties of a SBFrameList.
         * @exports ISBFrameList
         * @interface ISBFrameList
         * @property {Array.<ISBFrame>|null} [frames] SBFrameList frames
         */
    
        /**
         * Constructs a new SBFrameList.
         * @exports SBFrameList
         * @classdesc Represents a SBFrameList.
         * @implements ISBFrameList
         * @constructor
         * @param {ISBFrameList=} [properties] Properties to set
         */
        function SBFrameList(properties) {
            this.frames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBFrameList frames.
         * @member {Array.<ISBFrame>} frames
         * @memberof SBFrameList
         * @instance
         */
        SBFrameList.prototype.frames = $util.emptyArray;
    
        /**
         * Creates a new SBFrameList instance using the specified properties.
         * @function create
         * @memberof SBFrameList
         * @static
         * @param {ISBFrameList=} [properties] Properties to set
         * @returns {SBFrameList} SBFrameList instance
         */
        SBFrameList.create = function create(properties) {
            return new SBFrameList(properties);
        };
    
        /**
         * Encodes the specified SBFrameList message. Does not implicitly {@link SBFrameList.verify|verify} messages.
         * @function encode
         * @memberof SBFrameList
         * @static
         * @param {ISBFrameList} message SBFrameList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBFrameList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frames != null && message.frames.length)
                for (var i = 0; i < message.frames.length; ++i)
                    $root.SBFrame.encode(message.frames[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SBFrameList message, length delimited. Does not implicitly {@link SBFrameList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBFrameList
         * @static
         * @param {ISBFrameList} message SBFrameList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBFrameList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBFrameList message from the specified reader or buffer.
         * @function decode
         * @memberof SBFrameList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBFrameList} SBFrameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBFrameList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBFrameList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.frames && message.frames.length))
                        message.frames = [];
                    message.frames.push($root.SBFrame.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBFrameList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBFrameList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBFrameList} SBFrameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBFrameList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBFrameList message.
         * @function verify
         * @memberof SBFrameList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBFrameList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frames != null && message.hasOwnProperty("frames")) {
                if (!Array.isArray(message.frames))
                    return "frames: array expected";
                for (var i = 0; i < message.frames.length; ++i) {
                    var error = $root.SBFrame.verify(message.frames[i]);
                    if (error)
                        return "frames." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SBFrameList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBFrameList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBFrameList} SBFrameList
         */
        SBFrameList.fromObject = function fromObject(object) {
            if (object instanceof $root.SBFrameList)
                return object;
            var message = new $root.SBFrameList();
            if (object.frames) {
                if (!Array.isArray(object.frames))
                    throw TypeError(".SBFrameList.frames: array expected");
                message.frames = [];
                for (var i = 0; i < object.frames.length; ++i) {
                    if (typeof object.frames[i] !== "object")
                        throw TypeError(".SBFrameList.frames: object expected");
                    message.frames[i] = $root.SBFrame.fromObject(object.frames[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SBFrameList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBFrameList
         * @static
         * @param {SBFrameList} message SBFrameList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBFrameList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.frames = [];
            if (message.frames && message.frames.length) {
                object.frames = [];
                for (var j = 0; j < message.frames.length; ++j)
                    object.frames[j] = $root.SBFrame.toObject(message.frames[j], options);
            }
            return object;
        };
    
        /**
         * Converts this SBFrameList to JSON.
         * @function toJSON
         * @memberof SBFrameList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBFrameList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBFrameList;
    })();
    
    $root.SBHit = (function() {
    
        /**
         * Properties of a SBHit.
         * @exports ISBHit
         * @interface ISBHit
         * @property {string|null} [id] SBHit id
         * @property {string|null} [scoreId] SBHit scoreId
         * @property {string|null} [punchId] SBHit punchId
         * @property {number|null} [timestamp] SBHit timestamp
         * @property {number|null} [x] SBHit x
         * @property {number|null} [y] SBHit y
         * @property {number|null} [z] SBHit z
         * @property {number|null} [vX] SBHit vX
         * @property {number|null} [vY] SBHit vY
         * @property {number|null} [vZ] SBHit vZ
         * @property {number|null} [multiplier] SBHit multiplier
         * @property {number|null} [streak] SBHit streak
         * @property {number|null} [score] SBHit score
         * @property {boolean|null} [trig] SBHit trig
         * @property {boolean|null} [isLeft] SBHit isLeft
         */
    
        /**
         * Constructs a new SBHit.
         * @exports SBHit
         * @classdesc Represents a SBHit.
         * @implements ISBHit
         * @constructor
         * @param {ISBHit=} [properties] Properties to set
         */
        function SBHit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBHit id.
         * @member {string} id
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.id = "";
    
        /**
         * SBHit scoreId.
         * @member {string} scoreId
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.scoreId = "";
    
        /**
         * SBHit punchId.
         * @member {string} punchId
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.punchId = "";
    
        /**
         * SBHit timestamp.
         * @member {number} timestamp
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.timestamp = 0;
    
        /**
         * SBHit x.
         * @member {number} x
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.x = 0;
    
        /**
         * SBHit y.
         * @member {number} y
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.y = 0;
    
        /**
         * SBHit z.
         * @member {number} z
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.z = 0;
    
        /**
         * SBHit vX.
         * @member {number} vX
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.vX = 0;
    
        /**
         * SBHit vY.
         * @member {number} vY
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.vY = 0;
    
        /**
         * SBHit vZ.
         * @member {number} vZ
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.vZ = 0;
    
        /**
         * SBHit multiplier.
         * @member {number} multiplier
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.multiplier = 0;
    
        /**
         * SBHit streak.
         * @member {number} streak
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.streak = 0;
    
        /**
         * SBHit score.
         * @member {number} score
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.score = 0;
    
        /**
         * SBHit trig.
         * @member {boolean} trig
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.trig = false;
    
        /**
         * SBHit isLeft.
         * @member {boolean} isLeft
         * @memberof SBHit
         * @instance
         */
        SBHit.prototype.isLeft = false;
    
        /**
         * Creates a new SBHit instance using the specified properties.
         * @function create
         * @memberof SBHit
         * @static
         * @param {ISBHit=} [properties] Properties to set
         * @returns {SBHit} SBHit instance
         */
        SBHit.create = function create(properties) {
            return new SBHit(properties);
        };
    
        /**
         * Encodes the specified SBHit message. Does not implicitly {@link SBHit.verify|verify} messages.
         * @function encode
         * @memberof SBHit
         * @static
         * @param {ISBHit} message SBHit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBHit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.scoreId != null && message.hasOwnProperty("scoreId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.scoreId);
            if (message.punchId != null && message.hasOwnProperty("punchId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.punchId);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.timestamp);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.y);
            if (message.z != null && message.hasOwnProperty("z"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.z);
            if (message.vX != null && message.hasOwnProperty("vX"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.vX);
            if (message.vY != null && message.hasOwnProperty("vY"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.vY);
            if (message.vZ != null && message.hasOwnProperty("vZ"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.vZ);
            if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.multiplier);
            if (message.streak != null && message.hasOwnProperty("streak"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.streak);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.score);
            if (message.trig != null && message.hasOwnProperty("trig"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.trig);
            if (message.isLeft != null && message.hasOwnProperty("isLeft"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.isLeft);
            return writer;
        };
    
        /**
         * Encodes the specified SBHit message, length delimited. Does not implicitly {@link SBHit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBHit
         * @static
         * @param {ISBHit} message SBHit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBHit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBHit message from the specified reader or buffer.
         * @function decode
         * @memberof SBHit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBHit} SBHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBHit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBHit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.scoreId = reader.string();
                    break;
                case 3:
                    message.punchId = reader.string();
                    break;
                case 4:
                    message.timestamp = reader.double();
                    break;
                case 5:
                    message.x = reader.float();
                    break;
                case 6:
                    message.y = reader.float();
                    break;
                case 7:
                    message.z = reader.float();
                    break;
                case 8:
                    message.vX = reader.float();
                    break;
                case 9:
                    message.vY = reader.float();
                    break;
                case 10:
                    message.vZ = reader.float();
                    break;
                case 11:
                    message.multiplier = reader.int32();
                    break;
                case 12:
                    message.streak = reader.int32();
                    break;
                case 13:
                    message.score = reader.int32();
                    break;
                case 14:
                    message.trig = reader.bool();
                    break;
                case 15:
                    message.isLeft = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBHit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBHit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBHit} SBHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBHit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBHit message.
         * @function verify
         * @memberof SBHit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBHit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.scoreId != null && message.hasOwnProperty("scoreId"))
                if (!$util.isString(message.scoreId))
                    return "scoreId: string expected";
            if (message.punchId != null && message.hasOwnProperty("punchId"))
                if (!$util.isString(message.punchId))
                    return "punchId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp !== "number")
                    return "timestamp: number expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.vX != null && message.hasOwnProperty("vX"))
                if (typeof message.vX !== "number")
                    return "vX: number expected";
            if (message.vY != null && message.hasOwnProperty("vY"))
                if (typeof message.vY !== "number")
                    return "vY: number expected";
            if (message.vZ != null && message.hasOwnProperty("vZ"))
                if (typeof message.vZ !== "number")
                    return "vZ: number expected";
            if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                if (!$util.isInteger(message.multiplier))
                    return "multiplier: integer expected";
            if (message.streak != null && message.hasOwnProperty("streak"))
                if (!$util.isInteger(message.streak))
                    return "streak: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.trig != null && message.hasOwnProperty("trig"))
                if (typeof message.trig !== "boolean")
                    return "trig: boolean expected";
            if (message.isLeft != null && message.hasOwnProperty("isLeft"))
                if (typeof message.isLeft !== "boolean")
                    return "isLeft: boolean expected";
            return null;
        };
    
        /**
         * Creates a SBHit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBHit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBHit} SBHit
         */
        SBHit.fromObject = function fromObject(object) {
            if (object instanceof $root.SBHit)
                return object;
            var message = new $root.SBHit();
            if (object.id != null)
                message.id = String(object.id);
            if (object.scoreId != null)
                message.scoreId = String(object.scoreId);
            if (object.punchId != null)
                message.punchId = String(object.punchId);
            if (object.timestamp != null)
                message.timestamp = Number(object.timestamp);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.vX != null)
                message.vX = Number(object.vX);
            if (object.vY != null)
                message.vY = Number(object.vY);
            if (object.vZ != null)
                message.vZ = Number(object.vZ);
            if (object.multiplier != null)
                message.multiplier = object.multiplier | 0;
            if (object.streak != null)
                message.streak = object.streak | 0;
            if (object.score != null)
                message.score = object.score | 0;
            if (object.trig != null)
                message.trig = Boolean(object.trig);
            if (object.isLeft != null)
                message.isLeft = Boolean(object.isLeft);
            return message;
        };
    
        /**
         * Creates a plain object from a SBHit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBHit
         * @static
         * @param {SBHit} message SBHit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBHit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.scoreId = "";
                object.punchId = "";
                object.timestamp = 0;
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.vX = 0;
                object.vY = 0;
                object.vZ = 0;
                object.multiplier = 0;
                object.streak = 0;
                object.score = 0;
                object.trig = false;
                object.isLeft = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.scoreId != null && message.hasOwnProperty("scoreId"))
                object.scoreId = message.scoreId;
            if (message.punchId != null && message.hasOwnProperty("punchId"))
                object.punchId = message.punchId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = options.json && !isFinite(message.timestamp) ? String(message.timestamp) : message.timestamp;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.vX != null && message.hasOwnProperty("vX"))
                object.vX = options.json && !isFinite(message.vX) ? String(message.vX) : message.vX;
            if (message.vY != null && message.hasOwnProperty("vY"))
                object.vY = options.json && !isFinite(message.vY) ? String(message.vY) : message.vY;
            if (message.vZ != null && message.hasOwnProperty("vZ"))
                object.vZ = options.json && !isFinite(message.vZ) ? String(message.vZ) : message.vZ;
            if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                object.multiplier = message.multiplier;
            if (message.streak != null && message.hasOwnProperty("streak"))
                object.streak = message.streak;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.trig != null && message.hasOwnProperty("trig"))
                object.trig = message.trig;
            if (message.isLeft != null && message.hasOwnProperty("isLeft"))
                object.isLeft = message.isLeft;
            return object;
        };
    
        /**
         * Converts this SBHit to JSON.
         * @function toJSON
         * @memberof SBHit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBHit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBHit;
    })();
    
    $root.SBHitList = (function() {
    
        /**
         * Properties of a SBHitList.
         * @exports ISBHitList
         * @interface ISBHitList
         * @property {Array.<ISBHit>|null} [hits] SBHitList hits
         */
    
        /**
         * Constructs a new SBHitList.
         * @exports SBHitList
         * @classdesc Represents a SBHitList.
         * @implements ISBHitList
         * @constructor
         * @param {ISBHitList=} [properties] Properties to set
         */
        function SBHitList(properties) {
            this.hits = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBHitList hits.
         * @member {Array.<ISBHit>} hits
         * @memberof SBHitList
         * @instance
         */
        SBHitList.prototype.hits = $util.emptyArray;
    
        /**
         * Creates a new SBHitList instance using the specified properties.
         * @function create
         * @memberof SBHitList
         * @static
         * @param {ISBHitList=} [properties] Properties to set
         * @returns {SBHitList} SBHitList instance
         */
        SBHitList.create = function create(properties) {
            return new SBHitList(properties);
        };
    
        /**
         * Encodes the specified SBHitList message. Does not implicitly {@link SBHitList.verify|verify} messages.
         * @function encode
         * @memberof SBHitList
         * @static
         * @param {ISBHitList} message SBHitList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBHitList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hits != null && message.hits.length)
                for (var i = 0; i < message.hits.length; ++i)
                    $root.SBHit.encode(message.hits[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SBHitList message, length delimited. Does not implicitly {@link SBHitList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBHitList
         * @static
         * @param {ISBHitList} message SBHitList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBHitList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBHitList message from the specified reader or buffer.
         * @function decode
         * @memberof SBHitList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBHitList} SBHitList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBHitList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBHitList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.hits && message.hits.length))
                        message.hits = [];
                    message.hits.push($root.SBHit.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBHitList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBHitList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBHitList} SBHitList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBHitList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBHitList message.
         * @function verify
         * @memberof SBHitList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBHitList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hits != null && message.hasOwnProperty("hits")) {
                if (!Array.isArray(message.hits))
                    return "hits: array expected";
                for (var i = 0; i < message.hits.length; ++i) {
                    var error = $root.SBHit.verify(message.hits[i]);
                    if (error)
                        return "hits." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SBHitList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBHitList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBHitList} SBHitList
         */
        SBHitList.fromObject = function fromObject(object) {
            if (object instanceof $root.SBHitList)
                return object;
            var message = new $root.SBHitList();
            if (object.hits) {
                if (!Array.isArray(object.hits))
                    throw TypeError(".SBHitList.hits: array expected");
                message.hits = [];
                for (var i = 0; i < object.hits.length; ++i) {
                    if (typeof object.hits[i] !== "object")
                        throw TypeError(".SBHitList.hits: object expected");
                    message.hits[i] = $root.SBHit.fromObject(object.hits[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SBHitList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBHitList
         * @static
         * @param {SBHitList} message SBHitList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBHitList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.hits = [];
            if (message.hits && message.hits.length) {
                object.hits = [];
                for (var j = 0; j < message.hits.length; ++j)
                    object.hits[j] = $root.SBHit.toObject(message.hits[j], options);
            }
            return object;
        };
    
        /**
         * Converts this SBHitList to JSON.
         * @function toJSON
         * @memberof SBHitList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBHitList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBHitList;
    })();
    
    $root.SBPunch = (function() {
    
        /**
         * Properties of a SBPunch.
         * @exports ISBPunch
         * @interface ISBPunch
         * @property {string|null} [id] SBPunch id
         * @property {string|null} [performanceId] SBPunch performanceId
         * @property {number|null} [timestamp] SBPunch timestamp
         * @property {number|null} [x] SBPunch x
         * @property {number|null} [y] SBPunch y
         * @property {number|null} [z] SBPunch z
         * @property {number|null} [vX] SBPunch vX
         * @property {number|null} [vY] SBPunch vY
         * @property {number|null} [vZ] SBPunch vZ
         * @property {boolean|null} [trig] SBPunch trig
         * @property {boolean|null} [isLeft] SBPunch isLeft
         */
    
        /**
         * Constructs a new SBPunch.
         * @exports SBPunch
         * @classdesc Represents a SBPunch.
         * @implements ISBPunch
         * @constructor
         * @param {ISBPunch=} [properties] Properties to set
         */
        function SBPunch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBPunch id.
         * @member {string} id
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.id = "";
    
        /**
         * SBPunch performanceId.
         * @member {string} performanceId
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.performanceId = "";
    
        /**
         * SBPunch timestamp.
         * @member {number} timestamp
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.timestamp = 0;
    
        /**
         * SBPunch x.
         * @member {number} x
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.x = 0;
    
        /**
         * SBPunch y.
         * @member {number} y
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.y = 0;
    
        /**
         * SBPunch z.
         * @member {number} z
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.z = 0;
    
        /**
         * SBPunch vX.
         * @member {number} vX
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.vX = 0;
    
        /**
         * SBPunch vY.
         * @member {number} vY
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.vY = 0;
    
        /**
         * SBPunch vZ.
         * @member {number} vZ
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.vZ = 0;
    
        /**
         * SBPunch trig.
         * @member {boolean} trig
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.trig = false;
    
        /**
         * SBPunch isLeft.
         * @member {boolean} isLeft
         * @memberof SBPunch
         * @instance
         */
        SBPunch.prototype.isLeft = false;
    
        /**
         * Creates a new SBPunch instance using the specified properties.
         * @function create
         * @memberof SBPunch
         * @static
         * @param {ISBPunch=} [properties] Properties to set
         * @returns {SBPunch} SBPunch instance
         */
        SBPunch.create = function create(properties) {
            return new SBPunch(properties);
        };
    
        /**
         * Encodes the specified SBPunch message. Does not implicitly {@link SBPunch.verify|verify} messages.
         * @function encode
         * @memberof SBPunch
         * @static
         * @param {ISBPunch} message SBPunch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBPunch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.performanceId != null && message.hasOwnProperty("performanceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.performanceId);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.timestamp);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.y);
            if (message.z != null && message.hasOwnProperty("z"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.z);
            if (message.vX != null && message.hasOwnProperty("vX"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.vX);
            if (message.vY != null && message.hasOwnProperty("vY"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.vY);
            if (message.vZ != null && message.hasOwnProperty("vZ"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.vZ);
            if (message.trig != null && message.hasOwnProperty("trig"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.trig);
            if (message.isLeft != null && message.hasOwnProperty("isLeft"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isLeft);
            return writer;
        };
    
        /**
         * Encodes the specified SBPunch message, length delimited. Does not implicitly {@link SBPunch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBPunch
         * @static
         * @param {ISBPunch} message SBPunch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBPunch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBPunch message from the specified reader or buffer.
         * @function decode
         * @memberof SBPunch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBPunch} SBPunch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBPunch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBPunch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.performanceId = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.double();
                    break;
                case 4:
                    message.x = reader.float();
                    break;
                case 5:
                    message.y = reader.float();
                    break;
                case 6:
                    message.z = reader.float();
                    break;
                case 7:
                    message.vX = reader.float();
                    break;
                case 8:
                    message.vY = reader.float();
                    break;
                case 9:
                    message.vZ = reader.float();
                    break;
                case 10:
                    message.trig = reader.bool();
                    break;
                case 11:
                    message.isLeft = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBPunch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBPunch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBPunch} SBPunch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBPunch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBPunch message.
         * @function verify
         * @memberof SBPunch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBPunch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.performanceId != null && message.hasOwnProperty("performanceId"))
                if (!$util.isString(message.performanceId))
                    return "performanceId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp !== "number")
                    return "timestamp: number expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.vX != null && message.hasOwnProperty("vX"))
                if (typeof message.vX !== "number")
                    return "vX: number expected";
            if (message.vY != null && message.hasOwnProperty("vY"))
                if (typeof message.vY !== "number")
                    return "vY: number expected";
            if (message.vZ != null && message.hasOwnProperty("vZ"))
                if (typeof message.vZ !== "number")
                    return "vZ: number expected";
            if (message.trig != null && message.hasOwnProperty("trig"))
                if (typeof message.trig !== "boolean")
                    return "trig: boolean expected";
            if (message.isLeft != null && message.hasOwnProperty("isLeft"))
                if (typeof message.isLeft !== "boolean")
                    return "isLeft: boolean expected";
            return null;
        };
    
        /**
         * Creates a SBPunch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBPunch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBPunch} SBPunch
         */
        SBPunch.fromObject = function fromObject(object) {
            if (object instanceof $root.SBPunch)
                return object;
            var message = new $root.SBPunch();
            if (object.id != null)
                message.id = String(object.id);
            if (object.performanceId != null)
                message.performanceId = String(object.performanceId);
            if (object.timestamp != null)
                message.timestamp = Number(object.timestamp);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.vX != null)
                message.vX = Number(object.vX);
            if (object.vY != null)
                message.vY = Number(object.vY);
            if (object.vZ != null)
                message.vZ = Number(object.vZ);
            if (object.trig != null)
                message.trig = Boolean(object.trig);
            if (object.isLeft != null)
                message.isLeft = Boolean(object.isLeft);
            return message;
        };
    
        /**
         * Creates a plain object from a SBPunch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBPunch
         * @static
         * @param {SBPunch} message SBPunch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBPunch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.performanceId = "";
                object.timestamp = 0;
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.vX = 0;
                object.vY = 0;
                object.vZ = 0;
                object.trig = false;
                object.isLeft = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.performanceId != null && message.hasOwnProperty("performanceId"))
                object.performanceId = message.performanceId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = options.json && !isFinite(message.timestamp) ? String(message.timestamp) : message.timestamp;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.vX != null && message.hasOwnProperty("vX"))
                object.vX = options.json && !isFinite(message.vX) ? String(message.vX) : message.vX;
            if (message.vY != null && message.hasOwnProperty("vY"))
                object.vY = options.json && !isFinite(message.vY) ? String(message.vY) : message.vY;
            if (message.vZ != null && message.hasOwnProperty("vZ"))
                object.vZ = options.json && !isFinite(message.vZ) ? String(message.vZ) : message.vZ;
            if (message.trig != null && message.hasOwnProperty("trig"))
                object.trig = message.trig;
            if (message.isLeft != null && message.hasOwnProperty("isLeft"))
                object.isLeft = message.isLeft;
            return object;
        };
    
        /**
         * Converts this SBPunch to JSON.
         * @function toJSON
         * @memberof SBPunch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBPunch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBPunch;
    })();
    
    $root.SBPunchList = (function() {
    
        /**
         * Properties of a SBPunchList.
         * @exports ISBPunchList
         * @interface ISBPunchList
         * @property {Array.<ISBPunch>|null} [punches] SBPunchList punches
         */
    
        /**
         * Constructs a new SBPunchList.
         * @exports SBPunchList
         * @classdesc Represents a SBPunchList.
         * @implements ISBPunchList
         * @constructor
         * @param {ISBPunchList=} [properties] Properties to set
         */
        function SBPunchList(properties) {
            this.punches = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBPunchList punches.
         * @member {Array.<ISBPunch>} punches
         * @memberof SBPunchList
         * @instance
         */
        SBPunchList.prototype.punches = $util.emptyArray;
    
        /**
         * Creates a new SBPunchList instance using the specified properties.
         * @function create
         * @memberof SBPunchList
         * @static
         * @param {ISBPunchList=} [properties] Properties to set
         * @returns {SBPunchList} SBPunchList instance
         */
        SBPunchList.create = function create(properties) {
            return new SBPunchList(properties);
        };
    
        /**
         * Encodes the specified SBPunchList message. Does not implicitly {@link SBPunchList.verify|verify} messages.
         * @function encode
         * @memberof SBPunchList
         * @static
         * @param {ISBPunchList} message SBPunchList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBPunchList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.punches != null && message.punches.length)
                for (var i = 0; i < message.punches.length; ++i)
                    $root.SBPunch.encode(message.punches[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SBPunchList message, length delimited. Does not implicitly {@link SBPunchList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBPunchList
         * @static
         * @param {ISBPunchList} message SBPunchList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBPunchList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBPunchList message from the specified reader or buffer.
         * @function decode
         * @memberof SBPunchList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBPunchList} SBPunchList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBPunchList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBPunchList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.punches && message.punches.length))
                        message.punches = [];
                    message.punches.push($root.SBPunch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBPunchList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBPunchList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBPunchList} SBPunchList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBPunchList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBPunchList message.
         * @function verify
         * @memberof SBPunchList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBPunchList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.punches != null && message.hasOwnProperty("punches")) {
                if (!Array.isArray(message.punches))
                    return "punches: array expected";
                for (var i = 0; i < message.punches.length; ++i) {
                    var error = $root.SBPunch.verify(message.punches[i]);
                    if (error)
                        return "punches." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SBPunchList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBPunchList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBPunchList} SBPunchList
         */
        SBPunchList.fromObject = function fromObject(object) {
            if (object instanceof $root.SBPunchList)
                return object;
            var message = new $root.SBPunchList();
            if (object.punches) {
                if (!Array.isArray(object.punches))
                    throw TypeError(".SBPunchList.punches: array expected");
                message.punches = [];
                for (var i = 0; i < object.punches.length; ++i) {
                    if (typeof object.punches[i] !== "object")
                        throw TypeError(".SBPunchList.punches: object expected");
                    message.punches[i] = $root.SBPunch.fromObject(object.punches[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SBPunchList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBPunchList
         * @static
         * @param {SBPunchList} message SBPunchList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBPunchList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.punches = [];
            if (message.punches && message.punches.length) {
                object.punches = [];
                for (var j = 0; j < message.punches.length; ++j)
                    object.punches[j] = $root.SBPunch.toObject(message.punches[j], options);
            }
            return object;
        };
    
        /**
         * Converts this SBPunchList to JSON.
         * @function toJSON
         * @memberof SBPunchList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBPunchList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBPunchList;
    })();
    
    $root.SBPerformanceUpload = (function() {
    
        /**
         * Properties of a SBPerformanceUpload.
         * @exports ISBPerformanceUpload
         * @interface ISBPerformanceUpload
         * @property {number|null} [seconds] SBPerformanceUpload seconds
         * @property {string|null} [youtubeId] SBPerformanceUpload youtubeId
         * @property {string|null} [songName] SBPerformanceUpload songName
         * @property {number|null} [songLength] SBPerformanceUpload songLength
         * @property {string|null} [songChannel] SBPerformanceUpload songChannel
         * @property {string|null} [songThumbnail] SBPerformanceUpload songThumbnail
         * @property {number|null} [songThumbnailWidth] SBPerformanceUpload songThumbnailWidth
         * @property {number|null} [songThumbnailHeight] SBPerformanceUpload songThumbnailHeight
         * @property {Uint8Array|null} [legacy] SBPerformanceUpload legacy
         * @property {Array.<ISBPunch>|null} [punches] SBPerformanceUpload punches
         * @property {Array.<ISBFrame>|null} [frames] SBPerformanceUpload frames
         */
    
        /**
         * Constructs a new SBPerformanceUpload.
         * @exports SBPerformanceUpload
         * @classdesc Represents a SBPerformanceUpload.
         * @implements ISBPerformanceUpload
         * @constructor
         * @param {ISBPerformanceUpload=} [properties] Properties to set
         */
        function SBPerformanceUpload(properties) {
            this.punches = [];
            this.frames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBPerformanceUpload seconds.
         * @member {number} seconds
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.seconds = 0;
    
        /**
         * SBPerformanceUpload youtubeId.
         * @member {string} youtubeId
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.youtubeId = "";
    
        /**
         * SBPerformanceUpload songName.
         * @member {string} songName
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.songName = "";
    
        /**
         * SBPerformanceUpload songLength.
         * @member {number} songLength
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.songLength = 0;
    
        /**
         * SBPerformanceUpload songChannel.
         * @member {string} songChannel
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.songChannel = "";
    
        /**
         * SBPerformanceUpload songThumbnail.
         * @member {string} songThumbnail
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.songThumbnail = "";
    
        /**
         * SBPerformanceUpload songThumbnailWidth.
         * @member {number} songThumbnailWidth
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.songThumbnailWidth = 0;
    
        /**
         * SBPerformanceUpload songThumbnailHeight.
         * @member {number} songThumbnailHeight
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.songThumbnailHeight = 0;
    
        /**
         * SBPerformanceUpload legacy.
         * @member {Uint8Array} legacy
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.legacy = $util.newBuffer([]);
    
        /**
         * SBPerformanceUpload punches.
         * @member {Array.<ISBPunch>} punches
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.punches = $util.emptyArray;
    
        /**
         * SBPerformanceUpload frames.
         * @member {Array.<ISBFrame>} frames
         * @memberof SBPerformanceUpload
         * @instance
         */
        SBPerformanceUpload.prototype.frames = $util.emptyArray;
    
        /**
         * Creates a new SBPerformanceUpload instance using the specified properties.
         * @function create
         * @memberof SBPerformanceUpload
         * @static
         * @param {ISBPerformanceUpload=} [properties] Properties to set
         * @returns {SBPerformanceUpload} SBPerformanceUpload instance
         */
        SBPerformanceUpload.create = function create(properties) {
            return new SBPerformanceUpload(properties);
        };
    
        /**
         * Encodes the specified SBPerformanceUpload message. Does not implicitly {@link SBPerformanceUpload.verify|verify} messages.
         * @function encode
         * @memberof SBPerformanceUpload
         * @static
         * @param {ISBPerformanceUpload} message SBPerformanceUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBPerformanceUpload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.seconds);
            if (message.youtubeId != null && message.hasOwnProperty("youtubeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.youtubeId);
            if (message.songName != null && message.hasOwnProperty("songName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.songName);
            if (message.songLength != null && message.hasOwnProperty("songLength"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.songLength);
            if (message.songChannel != null && message.hasOwnProperty("songChannel"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.songChannel);
            if (message.songThumbnail != null && message.hasOwnProperty("songThumbnail"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.songThumbnail);
            if (message.songThumbnailWidth != null && message.hasOwnProperty("songThumbnailWidth"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.songThumbnailWidth);
            if (message.songThumbnailHeight != null && message.hasOwnProperty("songThumbnailHeight"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.songThumbnailHeight);
            if (message.legacy != null && message.hasOwnProperty("legacy"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.legacy);
            if (message.punches != null && message.punches.length)
                for (var i = 0; i < message.punches.length; ++i)
                    $root.SBPunch.encode(message.punches[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.frames != null && message.frames.length)
                for (var i = 0; i < message.frames.length; ++i)
                    $root.SBFrame.encode(message.frames[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SBPerformanceUpload message, length delimited. Does not implicitly {@link SBPerformanceUpload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBPerformanceUpload
         * @static
         * @param {ISBPerformanceUpload} message SBPerformanceUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBPerformanceUpload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBPerformanceUpload message from the specified reader or buffer.
         * @function decode
         * @memberof SBPerformanceUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBPerformanceUpload} SBPerformanceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBPerformanceUpload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBPerformanceUpload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.float();
                    break;
                case 2:
                    message.youtubeId = reader.string();
                    break;
                case 3:
                    message.songName = reader.string();
                    break;
                case 4:
                    message.songLength = reader.float();
                    break;
                case 5:
                    message.songChannel = reader.string();
                    break;
                case 6:
                    message.songThumbnail = reader.string();
                    break;
                case 7:
                    message.songThumbnailWidth = reader.int32();
                    break;
                case 8:
                    message.songThumbnailHeight = reader.int32();
                    break;
                case 9:
                    message.legacy = reader.bytes();
                    break;
                case 10:
                    if (!(message.punches && message.punches.length))
                        message.punches = [];
                    message.punches.push($root.SBPunch.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.frames && message.frames.length))
                        message.frames = [];
                    message.frames.push($root.SBFrame.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBPerformanceUpload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBPerformanceUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBPerformanceUpload} SBPerformanceUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBPerformanceUpload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBPerformanceUpload message.
         * @function verify
         * @memberof SBPerformanceUpload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBPerformanceUpload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (typeof message.seconds !== "number")
                    return "seconds: number expected";
            if (message.youtubeId != null && message.hasOwnProperty("youtubeId"))
                if (!$util.isString(message.youtubeId))
                    return "youtubeId: string expected";
            if (message.songName != null && message.hasOwnProperty("songName"))
                if (!$util.isString(message.songName))
                    return "songName: string expected";
            if (message.songLength != null && message.hasOwnProperty("songLength"))
                if (typeof message.songLength !== "number")
                    return "songLength: number expected";
            if (message.songChannel != null && message.hasOwnProperty("songChannel"))
                if (!$util.isString(message.songChannel))
                    return "songChannel: string expected";
            if (message.songThumbnail != null && message.hasOwnProperty("songThumbnail"))
                if (!$util.isString(message.songThumbnail))
                    return "songThumbnail: string expected";
            if (message.songThumbnailWidth != null && message.hasOwnProperty("songThumbnailWidth"))
                if (!$util.isInteger(message.songThumbnailWidth))
                    return "songThumbnailWidth: integer expected";
            if (message.songThumbnailHeight != null && message.hasOwnProperty("songThumbnailHeight"))
                if (!$util.isInteger(message.songThumbnailHeight))
                    return "songThumbnailHeight: integer expected";
            if (message.legacy != null && message.hasOwnProperty("legacy"))
                if (!(message.legacy && typeof message.legacy.length === "number" || $util.isString(message.legacy)))
                    return "legacy: buffer expected";
            if (message.punches != null && message.hasOwnProperty("punches")) {
                if (!Array.isArray(message.punches))
                    return "punches: array expected";
                for (var i = 0; i < message.punches.length; ++i) {
                    var error = $root.SBPunch.verify(message.punches[i]);
                    if (error)
                        return "punches." + error;
                }
            }
            if (message.frames != null && message.hasOwnProperty("frames")) {
                if (!Array.isArray(message.frames))
                    return "frames: array expected";
                for (var i = 0; i < message.frames.length; ++i) {
                    var error = $root.SBFrame.verify(message.frames[i]);
                    if (error)
                        return "frames." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SBPerformanceUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBPerformanceUpload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBPerformanceUpload} SBPerformanceUpload
         */
        SBPerformanceUpload.fromObject = function fromObject(object) {
            if (object instanceof $root.SBPerformanceUpload)
                return object;
            var message = new $root.SBPerformanceUpload();
            if (object.seconds != null)
                message.seconds = Number(object.seconds);
            if (object.youtubeId != null)
                message.youtubeId = String(object.youtubeId);
            if (object.songName != null)
                message.songName = String(object.songName);
            if (object.songLength != null)
                message.songLength = Number(object.songLength);
            if (object.songChannel != null)
                message.songChannel = String(object.songChannel);
            if (object.songThumbnail != null)
                message.songThumbnail = String(object.songThumbnail);
            if (object.songThumbnailWidth != null)
                message.songThumbnailWidth = object.songThumbnailWidth | 0;
            if (object.songThumbnailHeight != null)
                message.songThumbnailHeight = object.songThumbnailHeight | 0;
            if (object.legacy != null)
                if (typeof object.legacy === "string")
                    $util.base64.decode(object.legacy, message.legacy = $util.newBuffer($util.base64.length(object.legacy)), 0);
                else if (object.legacy.length)
                    message.legacy = object.legacy;
            if (object.punches) {
                if (!Array.isArray(object.punches))
                    throw TypeError(".SBPerformanceUpload.punches: array expected");
                message.punches = [];
                for (var i = 0; i < object.punches.length; ++i) {
                    if (typeof object.punches[i] !== "object")
                        throw TypeError(".SBPerformanceUpload.punches: object expected");
                    message.punches[i] = $root.SBPunch.fromObject(object.punches[i]);
                }
            }
            if (object.frames) {
                if (!Array.isArray(object.frames))
                    throw TypeError(".SBPerformanceUpload.frames: array expected");
                message.frames = [];
                for (var i = 0; i < object.frames.length; ++i) {
                    if (typeof object.frames[i] !== "object")
                        throw TypeError(".SBPerformanceUpload.frames: object expected");
                    message.frames[i] = $root.SBFrame.fromObject(object.frames[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SBPerformanceUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBPerformanceUpload
         * @static
         * @param {SBPerformanceUpload} message SBPerformanceUpload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBPerformanceUpload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.punches = [];
                object.frames = [];
            }
            if (options.defaults) {
                object.seconds = 0;
                object.youtubeId = "";
                object.songName = "";
                object.songLength = 0;
                object.songChannel = "";
                object.songThumbnail = "";
                object.songThumbnailWidth = 0;
                object.songThumbnailHeight = 0;
                object.legacy = options.bytes === String ? "" : [];
            }
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                object.seconds = options.json && !isFinite(message.seconds) ? String(message.seconds) : message.seconds;
            if (message.youtubeId != null && message.hasOwnProperty("youtubeId"))
                object.youtubeId = message.youtubeId;
            if (message.songName != null && message.hasOwnProperty("songName"))
                object.songName = message.songName;
            if (message.songLength != null && message.hasOwnProperty("songLength"))
                object.songLength = options.json && !isFinite(message.songLength) ? String(message.songLength) : message.songLength;
            if (message.songChannel != null && message.hasOwnProperty("songChannel"))
                object.songChannel = message.songChannel;
            if (message.songThumbnail != null && message.hasOwnProperty("songThumbnail"))
                object.songThumbnail = message.songThumbnail;
            if (message.songThumbnailWidth != null && message.hasOwnProperty("songThumbnailWidth"))
                object.songThumbnailWidth = message.songThumbnailWidth;
            if (message.songThumbnailHeight != null && message.hasOwnProperty("songThumbnailHeight"))
                object.songThumbnailHeight = message.songThumbnailHeight;
            if (message.legacy != null && message.hasOwnProperty("legacy"))
                object.legacy = options.bytes === String ? $util.base64.encode(message.legacy, 0, message.legacy.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacy) : message.legacy;
            if (message.punches && message.punches.length) {
                object.punches = [];
                for (var j = 0; j < message.punches.length; ++j)
                    object.punches[j] = $root.SBPunch.toObject(message.punches[j], options);
            }
            if (message.frames && message.frames.length) {
                object.frames = [];
                for (var j = 0; j < message.frames.length; ++j)
                    object.frames[j] = $root.SBFrame.toObject(message.frames[j], options);
            }
            return object;
        };
    
        /**
         * Converts this SBPerformanceUpload to JSON.
         * @function toJSON
         * @memberof SBPerformanceUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBPerformanceUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBPerformanceUpload;
    })();
    
    $root.SBScoreUpload = (function() {
    
        /**
         * Properties of a SBScoreUpload.
         * @exports ISBScoreUpload
         * @interface ISBScoreUpload
         * @property {string|null} [performanceId] SBScoreUpload performanceId
         * @property {number|null} [score] SBScoreUpload score
         * @property {number|null} [offsetX] SBScoreUpload offsetX
         * @property {number|null} [offsetY] SBScoreUpload offsetY
         * @property {number|null} [scaleX] SBScoreUpload scaleX
         * @property {number|null} [scaleY] SBScoreUpload scaleY
         * @property {Uint8Array|null} [legacy] SBScoreUpload legacy
         * @property {Array.<ISBHit>|null} [hits] SBScoreUpload hits
         * @property {Array.<ISBFrame>|null} [frames] SBScoreUpload frames
         */
    
        /**
         * Constructs a new SBScoreUpload.
         * @exports SBScoreUpload
         * @classdesc Represents a SBScoreUpload.
         * @implements ISBScoreUpload
         * @constructor
         * @param {ISBScoreUpload=} [properties] Properties to set
         */
        function SBScoreUpload(properties) {
            this.hits = [];
            this.frames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SBScoreUpload performanceId.
         * @member {string} performanceId
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.performanceId = "";
    
        /**
         * SBScoreUpload score.
         * @member {number} score
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.score = 0;
    
        /**
         * SBScoreUpload offsetX.
         * @member {number} offsetX
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.offsetX = 0;
    
        /**
         * SBScoreUpload offsetY.
         * @member {number} offsetY
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.offsetY = 0;
    
        /**
         * SBScoreUpload scaleX.
         * @member {number} scaleX
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.scaleX = 0;
    
        /**
         * SBScoreUpload scaleY.
         * @member {number} scaleY
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.scaleY = 0;
    
        /**
         * SBScoreUpload legacy.
         * @member {Uint8Array} legacy
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.legacy = $util.newBuffer([]);
    
        /**
         * SBScoreUpload hits.
         * @member {Array.<ISBHit>} hits
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.hits = $util.emptyArray;
    
        /**
         * SBScoreUpload frames.
         * @member {Array.<ISBFrame>} frames
         * @memberof SBScoreUpload
         * @instance
         */
        SBScoreUpload.prototype.frames = $util.emptyArray;
    
        /**
         * Creates a new SBScoreUpload instance using the specified properties.
         * @function create
         * @memberof SBScoreUpload
         * @static
         * @param {ISBScoreUpload=} [properties] Properties to set
         * @returns {SBScoreUpload} SBScoreUpload instance
         */
        SBScoreUpload.create = function create(properties) {
            return new SBScoreUpload(properties);
        };
    
        /**
         * Encodes the specified SBScoreUpload message. Does not implicitly {@link SBScoreUpload.verify|verify} messages.
         * @function encode
         * @memberof SBScoreUpload
         * @static
         * @param {ISBScoreUpload} message SBScoreUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBScoreUpload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.performanceId != null && message.hasOwnProperty("performanceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.performanceId);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
            if (message.legacy != null && message.hasOwnProperty("legacy"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.legacy);
            if (message.hits != null && message.hits.length)
                for (var i = 0; i < message.hits.length; ++i)
                    $root.SBHit.encode(message.hits[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.frames != null && message.frames.length)
                for (var i = 0; i < message.frames.length; ++i)
                    $root.SBFrame.encode(message.frames[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.offsetX);
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.offsetY);
            if (message.scaleX != null && message.hasOwnProperty("scaleX"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.scaleX);
            if (message.scaleY != null && message.hasOwnProperty("scaleY"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.scaleY);
            return writer;
        };
    
        /**
         * Encodes the specified SBScoreUpload message, length delimited. Does not implicitly {@link SBScoreUpload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SBScoreUpload
         * @static
         * @param {ISBScoreUpload} message SBScoreUpload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBScoreUpload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SBScoreUpload message from the specified reader or buffer.
         * @function decode
         * @memberof SBScoreUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SBScoreUpload} SBScoreUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBScoreUpload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SBScoreUpload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.performanceId = reader.string();
                    break;
                case 2:
                    message.score = reader.int32();
                    break;
                case 6:
                    message.offsetX = reader.float();
                    break;
                case 7:
                    message.offsetY = reader.float();
                    break;
                case 8:
                    message.scaleX = reader.float();
                    break;
                case 9:
                    message.scaleY = reader.float();
                    break;
                case 3:
                    message.legacy = reader.bytes();
                    break;
                case 4:
                    if (!(message.hits && message.hits.length))
                        message.hits = [];
                    message.hits.push($root.SBHit.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.frames && message.frames.length))
                        message.frames = [];
                    message.frames.push($root.SBFrame.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SBScoreUpload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SBScoreUpload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SBScoreUpload} SBScoreUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBScoreUpload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SBScoreUpload message.
         * @function verify
         * @memberof SBScoreUpload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBScoreUpload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.performanceId != null && message.hasOwnProperty("performanceId"))
                if (!$util.isString(message.performanceId))
                    return "performanceId: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                if (typeof message.offsetX !== "number")
                    return "offsetX: number expected";
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                if (typeof message.offsetY !== "number")
                    return "offsetY: number expected";
            if (message.scaleX != null && message.hasOwnProperty("scaleX"))
                if (typeof message.scaleX !== "number")
                    return "scaleX: number expected";
            if (message.scaleY != null && message.hasOwnProperty("scaleY"))
                if (typeof message.scaleY !== "number")
                    return "scaleY: number expected";
            if (message.legacy != null && message.hasOwnProperty("legacy"))
                if (!(message.legacy && typeof message.legacy.length === "number" || $util.isString(message.legacy)))
                    return "legacy: buffer expected";
            if (message.hits != null && message.hasOwnProperty("hits")) {
                if (!Array.isArray(message.hits))
                    return "hits: array expected";
                for (var i = 0; i < message.hits.length; ++i) {
                    var error = $root.SBHit.verify(message.hits[i]);
                    if (error)
                        return "hits." + error;
                }
            }
            if (message.frames != null && message.hasOwnProperty("frames")) {
                if (!Array.isArray(message.frames))
                    return "frames: array expected";
                for (var i = 0; i < message.frames.length; ++i) {
                    var error = $root.SBFrame.verify(message.frames[i]);
                    if (error)
                        return "frames." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SBScoreUpload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SBScoreUpload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SBScoreUpload} SBScoreUpload
         */
        SBScoreUpload.fromObject = function fromObject(object) {
            if (object instanceof $root.SBScoreUpload)
                return object;
            var message = new $root.SBScoreUpload();
            if (object.performanceId != null)
                message.performanceId = String(object.performanceId);
            if (object.score != null)
                message.score = object.score | 0;
            if (object.offsetX != null)
                message.offsetX = Number(object.offsetX);
            if (object.offsetY != null)
                message.offsetY = Number(object.offsetY);
            if (object.scaleX != null)
                message.scaleX = Number(object.scaleX);
            if (object.scaleY != null)
                message.scaleY = Number(object.scaleY);
            if (object.legacy != null)
                if (typeof object.legacy === "string")
                    $util.base64.decode(object.legacy, message.legacy = $util.newBuffer($util.base64.length(object.legacy)), 0);
                else if (object.legacy.length)
                    message.legacy = object.legacy;
            if (object.hits) {
                if (!Array.isArray(object.hits))
                    throw TypeError(".SBScoreUpload.hits: array expected");
                message.hits = [];
                for (var i = 0; i < object.hits.length; ++i) {
                    if (typeof object.hits[i] !== "object")
                        throw TypeError(".SBScoreUpload.hits: object expected");
                    message.hits[i] = $root.SBHit.fromObject(object.hits[i]);
                }
            }
            if (object.frames) {
                if (!Array.isArray(object.frames))
                    throw TypeError(".SBScoreUpload.frames: array expected");
                message.frames = [];
                for (var i = 0; i < object.frames.length; ++i) {
                    if (typeof object.frames[i] !== "object")
                        throw TypeError(".SBScoreUpload.frames: object expected");
                    message.frames[i] = $root.SBFrame.fromObject(object.frames[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SBScoreUpload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SBScoreUpload
         * @static
         * @param {SBScoreUpload} message SBScoreUpload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SBScoreUpload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.hits = [];
                object.frames = [];
            }
            if (options.defaults) {
                object.performanceId = "";
                object.score = 0;
                object.legacy = options.bytes === String ? "" : [];
                object.offsetX = 0;
                object.offsetY = 0;
                object.scaleX = 0;
                object.scaleY = 0;
            }
            if (message.performanceId != null && message.hasOwnProperty("performanceId"))
                object.performanceId = message.performanceId;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.legacy != null && message.hasOwnProperty("legacy"))
                object.legacy = options.bytes === String ? $util.base64.encode(message.legacy, 0, message.legacy.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacy) : message.legacy;
            if (message.hits && message.hits.length) {
                object.hits = [];
                for (var j = 0; j < message.hits.length; ++j)
                    object.hits[j] = $root.SBHit.toObject(message.hits[j], options);
            }
            if (message.frames && message.frames.length) {
                object.frames = [];
                for (var j = 0; j < message.frames.length; ++j)
                    object.frames[j] = $root.SBFrame.toObject(message.frames[j], options);
            }
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                object.offsetX = options.json && !isFinite(message.offsetX) ? String(message.offsetX) : message.offsetX;
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                object.offsetY = options.json && !isFinite(message.offsetY) ? String(message.offsetY) : message.offsetY;
            if (message.scaleX != null && message.hasOwnProperty("scaleX"))
                object.scaleX = options.json && !isFinite(message.scaleX) ? String(message.scaleX) : message.scaleX;
            if (message.scaleY != null && message.hasOwnProperty("scaleY"))
                object.scaleY = options.json && !isFinite(message.scaleY) ? String(message.scaleY) : message.scaleY;
            return object;
        };
    
        /**
         * Converts this SBScoreUpload to JSON.
         * @function toJSON
         * @memberof SBScoreUpload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SBScoreUpload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SBScoreUpload;
    })();

    return $root;
});
