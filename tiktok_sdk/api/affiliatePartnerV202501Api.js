"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartnerV202501ApiOperationNames = exports.AffiliatePartnerV202501Api = exports.AffiliatePartnerV202501ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var AffiliatePartnerV202501ApiApiKeys;
(function (AffiliatePartnerV202501ApiApiKeys) {
})(AffiliatePartnerV202501ApiApiKeys || (exports.AffiliatePartnerV202501ApiApiKeys = AffiliatePartnerV202501ApiApiKeys = {}));
class AffiliatePartnerV202501Api {
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
        this.authentications[AffiliatePartnerV202501ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async CampaignsCampaignIdProductsPerformanceGet(campaignId, xTtsAccessToken, contentType, pageSize, pageToken, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202501/campaigns/{campaign_id}/products/performance'
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsPerformanceGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsPerformanceGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdProductsPerformanceGet.');
        }
        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
        }
        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = models_1.ObjectSerializer.serialize(pageToken, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse");
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
    async CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet(campaignId, productId, creatorTempId, affiliateProductId, xTtsAccessToken, contentType2, contentType, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202501/campaigns/{campaign_id}/products/{product_id}/creator/{creator_temp_id}/content/statistics'
            .replace('{' + 'campaign_id' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'product_id' + '}', encodeURIComponent(String(productId)))
            .replace('{' + 'creator_temp_id' + '}', encodeURIComponent(String(creatorTempId)));
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet.');
        }
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet.');
        }
        if (creatorTempId === null || creatorTempId === undefined) {
            throw new Error('Required parameter creatorTempId was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet.');
        }
        if (affiliateProductId === null || affiliateProductId === undefined) {
            throw new Error('Required parameter affiliateProductId was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet.');
        }
        if (contentType2 === null || contentType2 === undefined) {
            throw new Error('Required parameter contentType2 was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet.');
        }
        if (affiliateProductId !== undefined) {
            localVarQueryParameters['affiliate_product_id'] = models_1.ObjectSerializer.serialize(affiliateProductId, "string");
        }
        if (contentType !== undefined) {
            localVarQueryParameters['content_type'] = models_1.ObjectSerializer.serialize(contentType, "string");
        }
        localVarHeaderParams['x-tts-access-token'] = models_1.ObjectSerializer.serialize(xTtsAccessToken, "string");
        localVarHeaderParams['Content-Type'] = models_1.ObjectSerializer.serialize(contentType2, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse");
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
    async CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet(campaignId, productId, creatorTempId, xTtsAccessToken, contentType, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202501/campaigns/{campaign_id}/products/{product_id}/creator/{creator_temp_id}/content/statistics/sample/status'
            .replace('{' + 'campaign_id' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'product_id' + '}', encodeURIComponent(String(productId)))
            .replace('{' + 'creator_temp_id' + '}', encodeURIComponent(String(creatorTempId)));
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet.');
        }
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet.');
        }
        if (creatorTempId === null || creatorTempId === undefined) {
            throw new Error('Required parameter creatorTempId was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse");
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
    async CampaignsCampaignIdProductsProductIdPerformanceGet(campaignId, productId, xTtsAccessToken, contentType, pageSize, pageToken, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202501/campaigns/{campaign_id}/products/{product_id}/performance'
            .replace('{' + 'campaign_id' + '}', encodeURIComponent(String(campaignId)))
            .replace('{' + 'product_id' + '}', encodeURIComponent(String(productId)));
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsProductIdPerformanceGet.');
        }
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling CampaignsCampaignIdProductsProductIdPerformanceGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsProductIdPerformanceGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdProductsProductIdPerformanceGet.');
        }
        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
        }
        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = models_1.ObjectSerializer.serialize(pageToken, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse");
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
exports.AffiliatePartnerV202501Api = AffiliatePartnerV202501Api;
AffiliatePartnerV202501Api.apiName = 'AffiliatePartnerV202501Api';
exports.AffiliatePartnerV202501ApiOperationNames = {
    CampaignsCampaignIdProductsPerformanceGet: 'CampaignsCampaignIdProductsPerformanceGet', CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet: 'CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet', CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet: 'CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet', CampaignsCampaignIdProductsProductIdPerformanceGet: 'CampaignsCampaignIdProductsProductIdPerformanceGet',
};
//# sourceMappingURL=affiliatePartnerV202501Api.js.map