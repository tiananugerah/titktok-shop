"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductV202401ApiOperationNames = exports.ProductV202401Api = exports.ProductV202401ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var ProductV202401ApiApiKeys;
(function (ProductV202401ApiApiKeys) {
})(ProductV202401ApiApiKeys || (exports.ProductV202401ApiApiKeys = ProductV202401ApiApiKeys = {}));
class ProductV202401Api {
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
        this.authentications[ProductV202401ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async ListingSchemasGet(categoryIds, xTtsAccessToken, contentType, locale, categoryVersion, options = { headers: {} }) {
        const localVarPath = this.basePath + '/product/202401/listing_schemas';
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
        if (categoryIds === null || categoryIds === undefined) {
            throw new Error('Required parameter categoryIds was null or undefined when calling ListingSchemasGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling ListingSchemasGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling ListingSchemasGet.');
        }
        if (categoryIds !== undefined) {
            localVarQueryParameters['category_ids'] = models_1.ObjectSerializer.serialize(categoryIds, "Array<number>");
        }
        if (locale !== undefined) {
            localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
        }
        if (categoryVersion !== undefined) {
            localVarQueryParameters['category_version'] = models_1.ObjectSerializer.serialize(categoryVersion, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "Product202401ListingSchemasResponse");
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
exports.ProductV202401Api = ProductV202401Api;
ProductV202401Api.apiName = 'ProductV202401Api';
exports.ProductV202401ApiOperationNames = {
    ListingSchemasGet: 'ListingSchemasGet',
};
//# sourceMappingURL=productV202401Api.js.map