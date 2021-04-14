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
proto.powerssl.apiserver.v1 = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.powerssl.apiserver.v1.UserServiceClient =
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
proto.powerssl.apiserver.v1.UserServicePromiseClient =
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
 *   !proto.powerssl.apiserver.v1.CreateUserRequest,
 *   !proto.powerssl.apiserver.v1.User>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.UserService/Create',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.CreateUserRequest,
  proto.powerssl.apiserver.v1.User,
  /**
   * @param {!proto.powerssl.apiserver.v1.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.CreateUserRequest,
 *   !proto.powerssl.apiserver.v1.User>}
 */
const methodInfo_UserService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.User,
  /**
   * @param {!proto.powerssl.apiserver.v1.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.User.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.User>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.DeleteUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_Delete = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.UserService/Delete',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.DeleteUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.powerssl.apiserver.v1.DeleteUserRequest} request
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
 *   !proto.powerssl.apiserver.v1.DeleteUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.powerssl.apiserver.v1.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.GetUserRequest,
 *   !proto.powerssl.apiserver.v1.User>}
 */
const methodDescriptor_UserService_Get = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.UserService/Get',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.GetUserRequest,
  proto.powerssl.apiserver.v1.User,
  /**
   * @param {!proto.powerssl.apiserver.v1.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.GetUserRequest,
 *   !proto.powerssl.apiserver.v1.User>}
 */
const methodInfo_UserService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.User,
  /**
   * @param {!proto.powerssl.apiserver.v1.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.User.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.UserServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.User>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.UserServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.ListUsersRequest,
 *   !proto.powerssl.apiserver.v1.ListUsersResponse>}
 */
const methodDescriptor_UserService_List = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.UserService/List',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.ListUsersRequest,
  proto.powerssl.apiserver.v1.ListUsersResponse,
  /**
   * @param {!proto.powerssl.apiserver.v1.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ListUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.ListUsersRequest,
 *   !proto.powerssl.apiserver.v1.ListUsersResponse>}
 */
const methodInfo_UserService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.ListUsersResponse,
  /**
   * @param {!proto.powerssl.apiserver.v1.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.UserServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.ListUsersResponse>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.UserServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.powerssl.apiserver.v1.UpdateUserRequest,
 *   !proto.powerssl.apiserver.v1.User>}
 */
const methodDescriptor_UserService_Update = new grpc.web.MethodDescriptor(
  '/powerssl.apiserver.v1.UserService/Update',
  grpc.web.MethodType.UNARY,
  proto.powerssl.apiserver.v1.UpdateUserRequest,
  proto.powerssl.apiserver.v1.User,
  /**
   * @param {!proto.powerssl.apiserver.v1.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.powerssl.apiserver.v1.UpdateUserRequest,
 *   !proto.powerssl.apiserver.v1.User>}
 */
const methodInfo_UserService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.powerssl.apiserver.v1.User,
  /**
   * @param {!proto.powerssl.apiserver.v1.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.powerssl.apiserver.v1.User.deserializeBinary
);


/**
 * @param {!proto.powerssl.apiserver.v1.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.powerssl.apiserver.v1.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.powerssl.apiserver.v1.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.powerssl.apiserver.v1.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update,
      callback);
};


/**
 * @param {!proto.powerssl.apiserver.v1.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.powerssl.apiserver.v1.User>}
 *     Promise that resolves to the response
 */
proto.powerssl.apiserver.v1.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/powerssl.apiserver.v1.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update);
};


module.exports = proto.powerssl.apiserver.v1;

