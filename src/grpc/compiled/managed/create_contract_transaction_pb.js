// source: managed/create_contract_transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var data_entry_pb = require('../data_entry_pb.js');
goog.object.extend(proto, data_entry_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var atomic_badge_pb = require('../atomic_badge_pb.js');
goog.object.extend(proto, atomic_badge_pb);
goog.exportSymbol('proto.wavesenterprise.CreateContractTransaction', null, global);
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
proto.wavesenterprise.CreateContractTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wavesenterprise.CreateContractTransaction.repeatedFields_, null);
};
goog.inherits(proto.wavesenterprise.CreateContractTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.CreateContractTransaction.displayName = 'proto.wavesenterprise.CreateContractTransaction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wavesenterprise.CreateContractTransaction.repeatedFields_ = [6,11];



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
proto.wavesenterprise.CreateContractTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.CreateContractTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.CreateContractTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.CreateContractTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    senderPublicKey: msg.getSenderPublicKey_asB64(),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    imageHash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contractName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    paramsList: jspb.Message.toObjectList(msg.getParamsList(),
    data_entry_pb.DataEntry.toObject, includeInstance),
    fee: jspb.Message.getFieldWithDefault(msg, 7, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 8, 0),
    feeAssetId: (f = msg.getFeeAssetId()) && google_protobuf_wrappers_pb.BytesValue.toObject(includeInstance, f),
    atomicBadge: (f = msg.getAtomicBadge()) && atomic_badge_pb.AtomicBadge.toObject(includeInstance, f),
    proofsList: msg.getProofsList_asB64()
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
 * @return {!proto.wavesenterprise.CreateContractTransaction}
 */
proto.wavesenterprise.CreateContractTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.CreateContractTransaction;
  return proto.wavesenterprise.CreateContractTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.CreateContractTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.CreateContractTransaction}
 */
proto.wavesenterprise.CreateContractTransaction.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSenderPublicKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageHash(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractName(value);
      break;
    case 6:
      var value = new data_entry_pb.DataEntry;
      reader.readMessage(value,data_entry_pb.DataEntry.deserializeBinaryFromReader);
      msg.addParams(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.BytesValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BytesValue.deserializeBinaryFromReader);
      msg.setFeeAssetId(value);
      break;
    case 10:
      var value = new atomic_badge_pb.AtomicBadge;
      reader.readMessage(value,atomic_badge_pb.AtomicBadge.deserializeBinaryFromReader);
      msg.setAtomicBadge(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addProofs(value);
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
proto.wavesenterprise.CreateContractTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.CreateContractTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.CreateContractTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.CreateContractTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSenderPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImageHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContractName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      data_entry_pb.DataEntry.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getFeeAssetId();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.BytesValue.serializeBinaryToWriter
    );
  }
  f = message.getAtomicBadge();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      atomic_badge_pb.AtomicBadge.serializeBinaryToWriter
    );
  }
  f = message.getProofsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      11,
      f
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getId_asB64 = function() {
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
proto.wavesenterprise.CreateContractTransaction.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes sender_public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getSenderPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sender_public_key = 2;
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {string}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getSenderPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSenderPublicKey()));
};


/**
 * optional bytes sender_public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getSenderPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setSenderPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string image_hash = 4;
 * @return {string}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getImageHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setImageHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string contract_name = 5;
 * @return {string}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setContractName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated DataEntry params = 6;
 * @return {!Array<!proto.wavesenterprise.DataEntry>}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getParamsList = function() {
  return /** @type{!Array<!proto.wavesenterprise.DataEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, data_entry_pb.DataEntry, 6));
};


/**
 * @param {!Array<!proto.wavesenterprise.DataEntry>} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
*/
proto.wavesenterprise.CreateContractTransaction.prototype.setParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.wavesenterprise.DataEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wavesenterprise.DataEntry}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.addParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.wavesenterprise.DataEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional int64 fee = 7;
 * @return {number}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 timestamp = 8;
 * @return {number}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional google.protobuf.BytesValue fee_asset_id = 9;
 * @return {?proto.google.protobuf.BytesValue}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getFeeAssetId = function() {
  return /** @type{?proto.google.protobuf.BytesValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BytesValue, 9));
};


/**
 * @param {?proto.google.protobuf.BytesValue|undefined} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
*/
proto.wavesenterprise.CreateContractTransaction.prototype.setFeeAssetId = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.clearFeeAssetId = function() {
  return this.setFeeAssetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.hasFeeAssetId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AtomicBadge atomic_badge = 10;
 * @return {?proto.wavesenterprise.AtomicBadge}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getAtomicBadge = function() {
  return /** @type{?proto.wavesenterprise.AtomicBadge} */ (
    jspb.Message.getWrapperField(this, atomic_badge_pb.AtomicBadge, 10));
};


/**
 * @param {?proto.wavesenterprise.AtomicBadge|undefined} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
*/
proto.wavesenterprise.CreateContractTransaction.prototype.setAtomicBadge = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.clearAtomicBadge = function() {
  return this.setAtomicBadge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.hasAtomicBadge = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated bytes proofs = 11;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getProofsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * repeated bytes proofs = 11;
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<string>}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getProofsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProofsList()));
};


/**
 * repeated bytes proofs = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.wavesenterprise.CreateContractTransaction.prototype.getProofsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProofsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.setProofsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.addProofs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wavesenterprise.CreateContractTransaction} returns this
 */
proto.wavesenterprise.CreateContractTransaction.prototype.clearProofsList = function() {
  return this.setProofsList([]);
};


goog.object.extend(exports, proto.wavesenterprise);
