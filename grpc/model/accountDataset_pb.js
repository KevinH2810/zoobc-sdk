// source: model/accountDataset.proto
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

var model_pagination_pb = require('../model/pagination_pb.js');
goog.object.extend(proto, model_pagination_pb);
goog.exportSymbol('proto.model.AccountDataset', null, global);
goog.exportSymbol('proto.model.AccountDatasetProperty', null, global);
goog.exportSymbol('proto.model.GetAccountDatasetRequest', null, global);
goog.exportSymbol('proto.model.GetAccountDatasetsRequest', null, global);
goog.exportSymbol('proto.model.GetAccountDatasetsResponse', null, global);
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
proto.model.AccountDataset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.AccountDataset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.AccountDataset.displayName = 'proto.model.AccountDataset';
}
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
proto.model.GetAccountDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.GetAccountDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.GetAccountDatasetsRequest.displayName = 'proto.model.GetAccountDatasetsRequest';
}
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
proto.model.GetAccountDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.model.GetAccountDatasetsResponse.repeatedFields_, null);
};
goog.inherits(proto.model.GetAccountDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.GetAccountDatasetsResponse.displayName = 'proto.model.GetAccountDatasetsResponse';
}
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
proto.model.GetAccountDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.GetAccountDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.GetAccountDatasetRequest.displayName = 'proto.model.GetAccountDatasetRequest';
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
proto.model.AccountDataset.prototype.toObject = function(opt_includeInstance) {
  return proto.model.AccountDataset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.AccountDataset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.AccountDataset.toObject = function(includeInstance, msg) {
  var f, obj = {
    setteraccountaddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipientaccountaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    property: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    latest: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    height: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.model.AccountDataset}
 */
proto.model.AccountDataset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.AccountDataset;
  return proto.model.AccountDataset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.AccountDataset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.AccountDataset}
 */
proto.model.AccountDataset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSetteraccountaddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientaccountaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProperty(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsactive(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLatest(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
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
proto.model.AccountDataset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.AccountDataset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.AccountDataset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.AccountDataset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetteraccountaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipientaccountaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProperty();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLatest();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional string SetterAccountAddress = 1;
 * @return {string}
 */
proto.model.AccountDataset.prototype.getSetteraccountaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.model.AccountDataset.prototype.setSetteraccountaddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string RecipientAccountAddress = 2;
 * @return {string}
 */
proto.model.AccountDataset.prototype.getRecipientaccountaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.model.AccountDataset.prototype.setRecipientaccountaddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Property = 3;
 * @return {string}
 */
proto.model.AccountDataset.prototype.getProperty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.model.AccountDataset.prototype.setProperty = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Value = 4;
 * @return {string}
 */
proto.model.AccountDataset.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.model.AccountDataset.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool IsActive = 5;
 * @return {boolean}
 */
proto.model.AccountDataset.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.model.AccountDataset.prototype.setIsactive = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool Latest = 6;
 * @return {boolean}
 */
proto.model.AccountDataset.prototype.getLatest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.model.AccountDataset.prototype.setLatest = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional uint32 Height = 7;
 * @return {number}
 */
proto.model.AccountDataset.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.model.AccountDataset.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};





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
proto.model.GetAccountDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.model.GetAccountDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.GetAccountDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetAccountDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    property: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recipientaccountaddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    setteraccountaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pagination: (f = msg.getPagination()) && model_pagination_pb.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.model.GetAccountDatasetsRequest}
 */
proto.model.GetAccountDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.GetAccountDatasetsRequest;
  return proto.model.GetAccountDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.GetAccountDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.GetAccountDatasetsRequest}
 */
proto.model.GetAccountDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProperty(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientaccountaddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSetteraccountaddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 6:
      var value = new model_pagination_pb.Pagination;
      reader.readMessage(value,model_pagination_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.model.GetAccountDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.GetAccountDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.GetAccountDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetAccountDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProperty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecipientaccountaddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSetteraccountaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      model_pagination_pb.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Property = 1;
 * @return {string}
 */
proto.model.GetAccountDatasetsRequest.prototype.getProperty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.model.GetAccountDatasetsRequest.prototype.setProperty = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Value = 2;
 * @return {string}
 */
proto.model.GetAccountDatasetsRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.model.GetAccountDatasetsRequest.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string RecipientAccountAddress = 3;
 * @return {string}
 */
proto.model.GetAccountDatasetsRequest.prototype.getRecipientaccountaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.model.GetAccountDatasetsRequest.prototype.setRecipientaccountaddress = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string SetterAccountAddress = 4;
 * @return {string}
 */
proto.model.GetAccountDatasetsRequest.prototype.getSetteraccountaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.model.GetAccountDatasetsRequest.prototype.setSetteraccountaddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 Height = 5;
 * @return {number}
 */
proto.model.GetAccountDatasetsRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.model.GetAccountDatasetsRequest.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Pagination Pagination = 6;
 * @return {?proto.model.Pagination}
 */
proto.model.GetAccountDatasetsRequest.prototype.getPagination = function() {
  return /** @type{?proto.model.Pagination} */ (
    jspb.Message.getWrapperField(this, model_pagination_pb.Pagination, 6));
};


/** @param {?proto.model.Pagination|undefined} value */
proto.model.GetAccountDatasetsRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.model.GetAccountDatasetsRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.GetAccountDatasetsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.model.GetAccountDatasetsResponse.repeatedFields_ = [2];



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
proto.model.GetAccountDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.model.GetAccountDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.GetAccountDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetAccountDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    accountdatasetsList: jspb.Message.toObjectList(msg.getAccountdatasetsList(),
    proto.model.AccountDataset.toObject, includeInstance)
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
 * @return {!proto.model.GetAccountDatasetsResponse}
 */
proto.model.GetAccountDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.GetAccountDatasetsResponse;
  return proto.model.GetAccountDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.GetAccountDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.GetAccountDatasetsResponse}
 */
proto.model.GetAccountDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.model.AccountDataset;
      reader.readMessage(value,proto.model.AccountDataset.deserializeBinaryFromReader);
      msg.addAccountdatasets(value);
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
proto.model.GetAccountDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.GetAccountDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.GetAccountDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetAccountDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAccountdatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.model.AccountDataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 Total = 1;
 * @return {string}
 */
proto.model.GetAccountDatasetsResponse.prototype.getTotal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/** @param {string} value */
proto.model.GetAccountDatasetsResponse.prototype.setTotal = function(value) {
  jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated AccountDataset AccountDatasets = 2;
 * @return {!Array<!proto.model.AccountDataset>}
 */
proto.model.GetAccountDatasetsResponse.prototype.getAccountdatasetsList = function() {
  return /** @type{!Array<!proto.model.AccountDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.model.AccountDataset, 2));
};


/** @param {!Array<!proto.model.AccountDataset>} value */
proto.model.GetAccountDatasetsResponse.prototype.setAccountdatasetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.model.AccountDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.AccountDataset}
 */
proto.model.GetAccountDatasetsResponse.prototype.addAccountdatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.model.AccountDataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.model.GetAccountDatasetsResponse.prototype.clearAccountdatasetsList = function() {
  this.setAccountdatasetsList([]);
};





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
proto.model.GetAccountDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.model.GetAccountDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.GetAccountDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetAccountDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    property: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipientaccountaddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.model.GetAccountDatasetRequest}
 */
proto.model.GetAccountDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.GetAccountDatasetRequest;
  return proto.model.GetAccountDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.GetAccountDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.GetAccountDatasetRequest}
 */
proto.model.GetAccountDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProperty(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientaccountaddress(value);
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
proto.model.GetAccountDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.GetAccountDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.GetAccountDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.GetAccountDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProperty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipientaccountaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Property = 1;
 * @return {string}
 */
proto.model.GetAccountDatasetRequest.prototype.getProperty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.model.GetAccountDatasetRequest.prototype.setProperty = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string RecipientAccountAddress = 2;
 * @return {string}
 */
proto.model.GetAccountDatasetRequest.prototype.getRecipientaccountaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.model.GetAccountDatasetRequest.prototype.setRecipientaccountaddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.model.AccountDatasetProperty = {
  ACCOUNTDATASETESCROWAPPROVAL: 0
};

goog.object.extend(exports, proto.model);
