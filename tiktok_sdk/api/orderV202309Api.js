"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderV202309ApiOperationNames = exports.OrderV202309Api = exports.OrderV202309ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var OrderV202309ApiApiKeys;
(function (OrderV202309ApiApiKeys) {
})(OrderV202309ApiApiKeys || (exports.OrderV202309ApiApiKeys = OrderV202309ApiApiKeys = {}));
class OrderV202309Api {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[OrderV202309ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async OrdersGet(ids, xTtsAccessToken, contentType, shopCipher, options = { headers: {} }) {
        const localVarPath = this.basePath + '/order/202309/orders';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams = {};
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling OrdersGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling OrdersGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling OrdersGet.');
        }
        if (ids !== undefined) {
            localVarQueryParameters['ids'] = models_1.ObjectSerializer.serialize(ids, "Array<string>");
        }
        if (shopCipher !== undefined) {
            localVarQueryParameters['shop_cipher'] = models_1.ObjectSerializer.serialize(shopCipher, "string");
        }
        localVarHeaderParams['x-tts-access-token'] = models_1.ObjectSerializer.serialize(xTtsAccessToken, "string");
        localVarHeaderParams['Content-Type'] = models_1.ObjectSerializer.serialize(contentType, "string");
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }
        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "Order202309GetOrderDetailResponse");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new apis_1.HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    async OrdersSearchPost(pageSize, xTtsAccessToken, contentType, sortOrder, pageToken, sortField, shopCipher, GetOrderListRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/order/202309/orders/search';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams = {};
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling OrdersSearchPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling OrdersSearchPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling OrdersSearchPost.');
        }
        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sort_order'] = models_1.ObjectSerializer.serialize(sortOrder, "string");
        }
        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = models_1.ObjectSerializer.serialize(pageToken, "string");
        }
        if (sortField !== undefined) {
            localVarQueryParameters['sort_field'] = models_1.ObjectSerializer.serialize(sortField, "string");
        }
        if (shopCipher !== undefined) {
            localVarQueryParameters['shop_cipher'] = models_1.ObjectSerializer.serialize(shopCipher, "string");
        }
        localVarHeaderParams['x-tts-access-token'] = models_1.ObjectSerializer.serialize(xTtsAccessToken, "string");
        localVarHeaderParams['Content-Type'] = models_1.ObjectSerializer.serialize(contentType, "string");
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(GetOrderListRequestBody, "Order202309GetOrderListRequestBody")
        };
        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }
        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "Order202309GetOrderListResponse");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new apis_1.HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
exports.OrderV202309Api = OrderV202309Api;
OrderV202309Api.apiName = 'OrderV202309Api';
exports.OrderV202309ApiOperationNames = {
    OrdersGet: 'OrdersGet', OrdersSearchPost: 'OrdersSearchPost',
};
//# sourceMappingURL=orderV202309Api.js.map