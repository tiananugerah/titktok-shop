"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreatorV202504ApiOperationNames = exports.AffiliateCreatorV202504Api = exports.AffiliateCreatorV202504ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var AffiliateCreatorV202504ApiApiKeys;
(function (AffiliateCreatorV202504ApiApiKeys) {
})(AffiliateCreatorV202504ApiApiKeys || (exports.AffiliateCreatorV202504ApiApiKeys = AffiliateCreatorV202504ApiApiKeys = {}));
class AffiliateCreatorV202504Api {
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
        this.authentications[AffiliateCreatorV202504ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost(publisherId, xTtsAccessToken, contentType, CreatorGeneratePublisherLinkRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_creator/202504/affiliate_sharing_links/publisher/{publisher_id}/generate_batch'
            .replace('{' + 'publisher_id' + '}', encodeURIComponent(String(publisherId)));
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
        if (publisherId === null || publisherId === undefined) {
            throw new Error('Required parameter publisherId was null or undefined when calling AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost.');
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
            body: models_1.ObjectSerializer.serialize(CreatorGeneratePublisherLinkRequestBody, "AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliateCreator202504CreatorGeneratePublisherLinkResponse");
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
exports.AffiliateCreatorV202504Api = AffiliateCreatorV202504Api;
AffiliateCreatorV202504Api.apiName = 'AffiliateCreatorV202504Api';
exports.AffiliateCreatorV202504ApiOperationNames = {
    AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost: 'AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost',
};
//# sourceMappingURL=affiliateCreatorV202504Api.js.map