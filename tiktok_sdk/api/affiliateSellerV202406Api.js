"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSellerV202406ApiOperationNames = exports.AffiliateSellerV202406Api = exports.AffiliateSellerV202406ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var AffiliateSellerV202406ApiApiKeys;
(function (AffiliateSellerV202406ApiApiKeys) {
})(AffiliateSellerV202406ApiApiKeys || (exports.AffiliateSellerV202406ApiApiKeys = AffiliateSellerV202406ApiApiKeys = {}));
class AffiliateSellerV202406Api {
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
        this.authentications[AffiliateSellerV202406ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async MarketplaceCreatorsCreatorUserIdGet(creatorUserId, xTtsAccessToken, contentType, shopCipher, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_seller/202406/marketplace_creators/{creator_user_id}'
            .replace('{' + 'creator_user_id' + '}', encodeURIComponent(String(creatorUserId)));
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
        if (creatorUserId === null || creatorUserId === undefined) {
            throw new Error('Required parameter creatorUserId was null or undefined when calling MarketplaceCreatorsCreatorUserIdGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling MarketplaceCreatorsCreatorUserIdGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling MarketplaceCreatorsCreatorUserIdGet.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse");
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
    async MarketplaceCreatorsSearchPost(pageSize, xTtsAccessToken, contentType, pageToken, shopCipher, SellerSearchCreatoronMarketplaceRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_seller/202406/marketplace_creators/search';
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
            throw new Error('Required parameter pageSize was null or undefined when calling MarketplaceCreatorsSearchPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling MarketplaceCreatorsSearchPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling MarketplaceCreatorsSearchPost.');
        }
        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = models_1.ObjectSerializer.serialize(pageToken, "string");
        }
        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
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
            body: models_1.ObjectSerializer.serialize(SellerSearchCreatoronMarketplaceRequestBody, "AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse");
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
exports.AffiliateSellerV202406Api = AffiliateSellerV202406Api;
AffiliateSellerV202406Api.apiName = 'AffiliateSellerV202406Api';
exports.AffiliateSellerV202406ApiOperationNames = {
    MarketplaceCreatorsCreatorUserIdGet: 'MarketplaceCreatorsCreatorUserIdGet', MarketplaceCreatorsSearchPost: 'MarketplaceCreatorsSearchPost',
};
//# sourceMappingURL=affiliateSellerV202406Api.js.map