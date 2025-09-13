"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartnerV202405ApiOperationNames = exports.AffiliatePartnerV202405Api = exports.AffiliatePartnerV202405ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var AffiliatePartnerV202405ApiApiKeys;
(function (AffiliatePartnerV202405ApiApiKeys) {
})(AffiliatePartnerV202405ApiApiKeys || (exports.AffiliatePartnerV202405ApiApiKeys = AffiliatePartnerV202405ApiApiKeys = {}));
class AffiliatePartnerV202405Api {
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
        this.authentications[AffiliatePartnerV202405ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async CampaignsCampaignIdGet(campaignId, categoryAssetCipher, xTtsAccessToken, contentType, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns/{campaign_id}'
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdGet.');
        }
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsCampaignIdGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdGet.');
        }
        if (categoryAssetCipher !== undefined) {
            localVarQueryParameters['category_asset_cipher'] = models_1.ObjectSerializer.serialize(categoryAssetCipher, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse");
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
    async CampaignsCampaignIdPartialEditPost(campaignId, categoryAssetCipher, xTtsAccessToken, contentType, EditAffiliatePartnerCampaignRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns/{campaign_id}/partial_edit'
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdPartialEditPost.');
        }
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsCampaignIdPartialEditPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdPartialEditPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdPartialEditPost.');
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
            body: models_1.ObjectSerializer.serialize(EditAffiliatePartnerCampaignRequestBody, "AffiliatePartner202405EditAffiliatePartnerCampaignRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405EditAffiliatePartnerCampaignResponse");
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
    async CampaignsCampaignIdProductsGet(campaignId, categoryAssetCipher, pageSize, xTtsAccessToken, contentType, pageToken, reviewStatus, productName, productId, shopName, categoryId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns/{campaign_id}/products'
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsGet.');
        }
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsCampaignIdProductsGet.');
        }
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling CampaignsCampaignIdProductsGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdProductsGet.');
        }
        if (categoryAssetCipher !== undefined) {
            localVarQueryParameters['category_asset_cipher'] = models_1.ObjectSerializer.serialize(categoryAssetCipher, "string");
        }
        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
        }
        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = models_1.ObjectSerializer.serialize(pageToken, "string");
        }
        if (reviewStatus !== undefined) {
            localVarQueryParameters['review_status'] = models_1.ObjectSerializer.serialize(reviewStatus, "string");
        }
        if (productName !== undefined) {
            localVarQueryParameters['product_name'] = models_1.ObjectSerializer.serialize(productName, "string");
        }
        if (productId !== undefined) {
            localVarQueryParameters['product_id'] = models_1.ObjectSerializer.serialize(productId, "string");
        }
        if (shopName !== undefined) {
            localVarQueryParameters['shop_name'] = models_1.ObjectSerializer.serialize(shopName, "string");
        }
        if (categoryId !== undefined) {
            localVarQueryParameters['category_id'] = models_1.ObjectSerializer.serialize(categoryId, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse");
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
    async CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost(campaignId, productId, categoryAssetCipher, xTtsAccessToken, contentType, GenerateAffiliatePartnerCampaignProductLinkRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns/{campaign_id}/products/{product_id}/promotion_link/generate'
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost.');
        }
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost.');
        }
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost.');
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
            body: models_1.ObjectSerializer.serialize(GenerateAffiliatePartnerCampaignProductLinkRequestBody, "AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse");
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
    async CampaignsCampaignIdProductsProductIdReviewPost(campaignId, productId, categoryAssetCipher, xTtsAccessToken, contentType, ReviewAffiliatePartnerCampaignProductRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns/{campaign_id}/products/{product_id}/review'
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdProductsProductIdReviewPost.');
        }
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling CampaignsCampaignIdProductsProductIdReviewPost.');
        }
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsCampaignIdProductsProductIdReviewPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdProductsProductIdReviewPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdProductsProductIdReviewPost.');
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
            body: models_1.ObjectSerializer.serialize(ReviewAffiliatePartnerCampaignProductRequestBody, "AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405ReviewAffiliatePartnerCampaignProductResponse");
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
    async CampaignsCampaignIdPublishPost(campaignId, categoryAssetCipher, xTtsAccessToken, contentType, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns/{campaign_id}/publish'
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
            throw new Error('Required parameter campaignId was null or undefined when calling CampaignsCampaignIdPublishPost.');
        }
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsCampaignIdPublishPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsCampaignIdPublishPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsCampaignIdPublishPost.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405PublishAffiliatePartnerCampaignResponse");
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
    async CampaignsGet(categoryAssetCipher, pageSize, xTtsAccessToken, contentType, pageToken, status, type, queryTypeFilter, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns';
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
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsGet.');
        }
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling CampaignsGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsGet.');
        }
        if (categoryAssetCipher !== undefined) {
            localVarQueryParameters['category_asset_cipher'] = models_1.ObjectSerializer.serialize(categoryAssetCipher, "string");
        }
        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
        }
        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = models_1.ObjectSerializer.serialize(pageToken, "string");
        }
        if (status !== undefined) {
            localVarQueryParameters['status'] = models_1.ObjectSerializer.serialize(status, "string");
        }
        if (type !== undefined) {
            localVarQueryParameters['type'] = models_1.ObjectSerializer.serialize(type, "string");
        }
        if (queryTypeFilter !== undefined) {
            localVarQueryParameters['query_type_filter'] = models_1.ObjectSerializer.serialize(queryTypeFilter, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405GetAffiliatePartnerCampaignListResponse");
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
    async CampaignsPost(categoryAssetCipher, xTtsAccessToken, contentType, CreateAffiliatePartnerCampaignRequestBody, options = { headers: {} }) {
        const localVarPath = this.basePath + '/affiliate_partner/202405/campaigns';
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
        if (categoryAssetCipher === null || categoryAssetCipher === undefined) {
            throw new Error('Required parameter categoryAssetCipher was null or undefined when calling CampaignsPost.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling CampaignsPost.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling CampaignsPost.');
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
            body: models_1.ObjectSerializer.serialize(CreateAffiliatePartnerCampaignRequestBody, "AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody")
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
                            body = models_1.ObjectSerializer.deserialize(body, "AffiliatePartner202405CreateAffiliatePartnerCampaignResponse");
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
exports.AffiliatePartnerV202405Api = AffiliatePartnerV202405Api;
AffiliatePartnerV202405Api.apiName = 'AffiliatePartnerV202405Api';
exports.AffiliatePartnerV202405ApiOperationNames = {
    CampaignsCampaignIdGet: 'CampaignsCampaignIdGet', CampaignsCampaignIdPartialEditPost: 'CampaignsCampaignIdPartialEditPost', CampaignsCampaignIdProductsGet: 'CampaignsCampaignIdProductsGet', CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost: 'CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost', CampaignsCampaignIdProductsProductIdReviewPost: 'CampaignsCampaignIdProductsProductIdReviewPost', CampaignsCampaignIdPublishPost: 'CampaignsCampaignIdPublishPost', CampaignsGet: 'CampaignsGet', CampaignsPost: 'CampaignsPost',
};
//# sourceMappingURL=affiliatePartnerV202405Api.js.map