"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartnerV202505ApiOperationNames = exports.AffiliatePartnerV202505Api = exports.AffiliatePartnerV202505ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var AffiliatePartnerV202505ApiApiKeys;
(function (AffiliatePartnerV202505ApiApiKeys) {
})(AffiliatePartnerV202505ApiApiKeys || (exports.AffiliatePartnerV202505ApiApiKeys = AffiliatePartnerV202505ApiApiKeys = {}));
class AffiliatePartnerV202505Api {
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
        this.authentications[AffiliatePartnerV202505ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost(campaignId, xTtsAccessToken, contentType, categoryAssetCipher, PartnerGenerateMultiAffiliateCampaignProductLinkRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202505/campaigns/{campaign_id}/products/promotion_links/generate_batch'
            .replace('{' + 'campaign_id' + '}', encodeURIComponent(String(campaignId)));
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
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost.');
        }
        if (categoryAssetCipher !== undefined) {
            localVarQueryParameters['category_asset_cipher'] = models_1.ObjectSerializer.serialize(categoryAssetCipher, "string");
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
            body: models_1.ObjectSerializer.serialize(PartnerGenerateMultiAffiliateCampaignProductLinkRequestBody, "AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse");
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
exports.AffiliatePartnerV202505Api = AffiliatePartnerV202505Api;
AffiliatePartnerV202505Api.apiName = 'AffiliatePartnerV202505Api';
exports.AffiliatePartnerV202505ApiOperationNames = {
    CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost: 'CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost',
};
//# sourceMappingURL=affiliatePartnerV202505Api.js.map