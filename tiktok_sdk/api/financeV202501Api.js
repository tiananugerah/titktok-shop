"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceV202501ApiOperationNames = exports.FinanceV202501Api = exports.FinanceV202501ApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://open-api.tiktokglobalshop.com';
var FinanceV202501ApiApiKeys;
(function (FinanceV202501ApiApiKeys) {
})(FinanceV202501ApiApiKeys || (exports.FinanceV202501ApiApiKeys = FinanceV202501ApiApiKeys = {}));
class FinanceV202501Api {
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
        this.authentications[FinanceV202501ApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    async OrdersOrderIdStatementTransactionsGet(orderId, xTtsAccessToken, contentType, shopCipher, options = { headers: {} }) {
        const localVarPath = this.basePath + '/finance/202501/orders/{order_id}/statement_transactions'
            .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
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
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling OrdersOrderIdStatementTransactionsGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling OrdersOrderIdStatementTransactionsGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling OrdersOrderIdStatementTransactionsGet.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "Finance202501GetTransactionsbyOrderResponse");
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
    async StatementsStatementIdStatementTransactionsGet(statementId, sortField, xTtsAccessToken, contentType, pageToken, sortOrder, pageSize, shopCipher, options = { headers: {} }) {
        const localVarPath = this.basePath + '/finance/202501/statements/{statement_id}/statement_transactions'
            .replace('{' + 'statement_id' + '}', encodeURIComponent(String(statementId)));
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
        if (statementId === null || statementId === undefined) {
            throw new Error('Required parameter statementId was null or undefined when calling StatementsStatementIdStatementTransactionsGet.');
        }
        if (sortField === null || sortField === undefined) {
            throw new Error('Required parameter sortField was null or undefined when calling StatementsStatementIdStatementTransactionsGet.');
        }
        if (xTtsAccessToken === null || xTtsAccessToken === undefined) {
            throw new Error('Required parameter xTtsAccessToken was null or undefined when calling StatementsStatementIdStatementTransactionsGet.');
        }
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling StatementsStatementIdStatementTransactionsGet.');
        }
        if (pageToken !== undefined) {
            localVarQueryParameters['page_token'] = models_1.ObjectSerializer.serialize(pageToken, "string");
        }
        if (sortField !== undefined) {
            localVarQueryParameters['sort_field'] = models_1.ObjectSerializer.serialize(sortField, "string");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sort_order'] = models_1.ObjectSerializer.serialize(sortOrder, "string");
        }
        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "any");
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
                            body = models_1.ObjectSerializer.deserialize(body, "Finance202501GetTransactionsbyStatementResponse");
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
exports.FinanceV202501Api = FinanceV202501Api;
FinanceV202501Api.apiName = 'FinanceV202501Api';
exports.FinanceV202501ApiOperationNames = {
    OrdersOrderIdStatementTransactionsGet: 'OrdersOrderIdStatementTransactionsGet', StatementsStatementIdStatementTransactionsGet: 'StatementsStatementIdStatementTransactionsGet',
};
//# sourceMappingURL=financeV202501Api.js.map