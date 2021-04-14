/**
 * @fileoverview gRPC-Web generated client stub for powerssl.apiserver.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.powerssl = {};
proto.powerssl.apiserver = {};
proto.powerssl.apiserver.v1 = require('./acme_server_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.powerssl.apiserver.v1.ACMEServerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.powerssl.apiserver.v1.ACMEServerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.CreateACMEServerRequest,
 *   !proto.powerssl.apiserver.v1.ACMEServer>}
 */
const methodDescriptor_ACMEServerService_Create = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.ACMEServerService/Create',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.CreateACMEServerRequest,
  proto.powerssl.apiserver.v1.ACMEServer,
  /**
   * @param {!proto.powerssl.apiserver.v1.CreateACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ACMEServer.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.CreateACMEServerRequest,
 *   !proto.powerssl.apiserver.v1.ACMEServer>}
 */
const methodInfo_ACMEServerService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.ACMEServer,
  /**
   * @param {!proto.powerssl.apiserver.v1.CreateACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ACMEServer.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.CreateACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.ACMEServer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.ACMEServer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.ACMEServerServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Create',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Create,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.CreateACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.ACMEServer>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.ACMEServerServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Create',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.DeleteACMEServerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ACMEServerService_Delete = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.ACMEServerService/Delete',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.DeleteACMEServerRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.powerssl.apiserver.v1.DeleteACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.DeleteACMEServerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ACMEServerService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.powerssl.apiserver.v1.DeleteACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.DeleteACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.ACMEServerServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Delete',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Delete,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.DeleteACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.ACMEServerServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Delete',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.GetACMEServerRequest,
 *   !proto.powerssl.apiserver.v1.ACMEServer>}
 */
const methodDescriptor_ACMEServerService_Get = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.ACMEServerService/Get',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.GetACMEServerRequest,
  proto.powerssl.apiserver.v1.ACMEServer,
  /**
   * @param {!proto.powerssl.apiserver.v1.GetACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ACMEServer.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.GetACMEServerRequest,
 *   !proto.powerssl.apiserver.v1.ACMEServer>}
 */
const methodInfo_ACMEServerService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.ACMEServer,
  /**
   * @param {!proto.powerssl.apiserver.v1.GetACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ACMEServer.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.GetACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.ACMEServer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.ACMEServer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.ACMEServerServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Get',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Get,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.GetACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.ACMEServer>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.ACMEServerServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Get',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.ListACMEServersRequest,
 *   !proto.powerssl.apiserver.v1.ListACMEServersResponse>}
 */
const methodDescriptor_ACMEServerService_List = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.ACMEServerService/List',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.ListACMEServersRequest,
  proto.powerssl.apiserver.v1.ListACMEServersResponse,
  /**
   * @param {!proto.powerssl.apiserver.v1.ListACMEServersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ListACMEServersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.ListACMEServersRequest,
 *   !proto.powerssl.apiserver.v1.ListACMEServersResponse>}
 */
const methodInfo_ACMEServerService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.ListACMEServersResponse,
  /**
   * @param {!proto.powerssl.apiserver.v1.ListACMEServersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ListACMEServersResponse.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.ListACMEServersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.ListACMEServersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.ListACMEServersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.ACMEServerServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/List',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_List,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.ListACMEServersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.ListACMEServersResponse>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.ACMEServerServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/List',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.UpdateACMEServerRequest,
 *   !proto.powerssl.apiserver.v1.ACMEServer>}
 */
const methodDescriptor_ACMEServerService_Update = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.ACMEServerService/Update',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.UpdateACMEServerRequest,
  proto.powerssl.apiserver.v1.ACMEServer,
  /**
   * @param {!proto.powerssl.apiserver.v1.UpdateACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ACMEServer.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.UpdateACMEServerRequest,
 *   !proto.powerssl.apiserver.v1.ACMEServer>}
 */
const methodInfo_ACMEServerService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.ACMEServer,
  /**
   * @param {!proto.powerssl.apiserver.v1.UpdateACMEServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ACMEServer.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.UpdateACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.ACMEServer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.ACMEServer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.ACMEServerServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Update',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Update,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.UpdateACMEServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.ACMEServer>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.ACMEServerServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.ACMEServerService/Update',
      request,
      metadata || {},
      methodDescriptor_ACMEServerService_Update);
};


module.exports = proto.powerssl.apiserver.v1;

