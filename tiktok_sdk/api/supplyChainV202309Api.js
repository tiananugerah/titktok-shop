"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyChainV202309ApiOperationNames = exports.SupplyChainV202309Api = exports.SupplyChainV202309ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var SupplyChainV202309ApiApiKeys;
(function (SupplyChainV202309ApiApiKeys) {
})(SupplyChainV202309ApiApiKeys || (exports.SupplyChainV202309ApiApiKeys = SupplyChainV202309ApiApiKeys = {}));
class SupplyChainV202309Api {
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
        this.authentications[SupplyChainV202309ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async PackagesSyncPost(xTtsAccessToken, contentType, ConfirmPackageShipmentRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/supply_chain/202309/packages/sync';
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
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling PackagesSyncPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling PackagesSyncPost.');
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
            body: models_1.ObjectSerializer.serialize(ConfirmPackageShipmentRequestBody, "SupplyChain202309ConfirmPackageShipmentRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "SupplyChain202309ConfirmPackageShipmentResponse");
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
exports.SupplyChainV202309Api = SupplyChainV202309Api;
SupplyChainV202309Api.apiName = 'SupplyChainV202309Api';
exports.SupplyChainV202309ApiOperationNames = {
    PackagesSyncPost: 'PackagesSyncPost',
};
//# sourceMappingURL=supplyChainV202309Api.js.map