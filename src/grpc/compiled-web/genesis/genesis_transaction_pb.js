// source: genesis/genesis_transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.wavesenterprise.GenesisTransaction', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wavesenterprise.GenesisTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wavesenterprise.GenesisTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.GenesisTransaction.displayName = 'proto.wavesenterprise.GenesisTransaction';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wavesenterprise.GenesisTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.GenesisTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.GenesisTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.GenesisTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    recipient: msg.getRecipient_asB64(),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wavesenterprise.GenesisTransaction}
 */
proto.wavesenterprise.GenesisTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.GenesisTransaction;
  return proto.wavesenterprise.GenesisTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.GenesisTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.GenesisTransaction}
 */
proto.wavesenterprise.GenesisTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRecipient(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wavesenterprise.GenesisTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.GenesisTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.GenesisTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.GenesisTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRecipient_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.GenesisTransaction} returns this
 */
proto.wavesenterprise.GenesisTransaction.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes recipient = 2;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getRecipient = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes recipient = 2;
 * This is a type-conversion wrapper around `getRecipient()`
 * @return {string}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getRecipient_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRecipient()));
};


/**
 * optional bytes recipient = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRecipient()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getRecipient_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRecipient()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.GenesisTransaction} returns this
 */
proto.wavesenterprise.GenesisTransaction.prototype.setRecipient = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 amount = 3;
 * @return {number}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.GenesisTransaction} returns this
 */
proto.wavesenterprise.GenesisTransaction.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 fee = 4;
 * @return {number}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.GenesisTransaction} returns this
 */
proto.wavesenterprise.GenesisTransaction.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.GenesisTransaction} returns this
 */
proto.wavesenterprise.GenesisTransaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes signature = 6;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes signature = 6;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.GenesisTransaction.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.GenesisTransaction} returns this
 */
proto.wavesenterprise.GenesisTransaction.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


goog.object.extend(exports, proto.wavesenterprise);
