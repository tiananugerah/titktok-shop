"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessToken = exports.AccessTokenTool = exports.AccessTokenBuilder = exports.UserType = void 0;
const config_1 = require("./config");
const request_1 = __importDefault(require("request"));
const auth_host = "https://auth.tiktok-shops.com";
const refresh_token_path = "/api/v2/token/refresh";
const get_access_token_path = "/api/v2/token/get";
const grant_type = "authorized_code";
var UserType;
(function (UserType) {
    UserType[UserType["Seller"] = 0] = "Seller";
    UserType[UserType["Creator"] = 1] = "Creator";
})(UserType || (exports.UserType = UserType = {}));
class AccessToken {
    constructor({ access_token, refresh_token, config }) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.config = config;
    }
    async refreshToken(props) {
        const { refresh_token: _refresh_token, auto_filled = false } = props;
        const path = auth_host + refresh_token_path;
        const app_key = this.config?.app_key || config_1.ClientConfiguration.globalConfig.app_key;
        const app_secret = this.config?.app_secret || config_1.ClientConfiguration.globalConfig.app_secret;
        const refresh_token = _refresh_token || this.refresh_token;
        if (!app_key) {
            throw new Error("app_key is required");
        }
        if (!app_secret) {
            throw new Error("app_secret is required");
        }
        if (!refresh_token) {
            throw new Error("refresh_token is required");
        }
        const qs = {
            grant_type,
            refresh_token,
            app_key,
            app_secret,
        };
        const options = {
            method: "GET",
            url: path,
            qs,
            useQuerystring: true,
        };
        return new Promise((resolve, reject) => {
            (0, request_1.default)(options, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                if (auto_filled) {
                    if (body.data?.access_token)
                        this.access_token = body.data?.access_token;
                    if (body.data?.refresh_token)
                        this.refresh_token = body.data?.refresh_token;
                }
                resolve({
                    response,
                    body,
                });
            });
        });
    }
    async getAccessToken(props) {
        const { auth_code, auto_filled = false } = props;
        const path = auth_host + get_access_token_path;
        const app_key = this.config?.app_key || config_1.ClientConfiguration.globalConfig.app_key;
        const app_secret = this.config?.app_secret || config_1.ClientConfiguration.globalConfig.app_secret;
        if (!app_key) {
            throw new Error("app_key is required");
        }
        if (!app_secret) {
            throw new Error("app_secret is required");
        }
        if (!auth_code) {
            throw new Error("auth_code is required");
        }
        const qs = {
            grant_type,
            auth_code,
            app_key,
            app_secret,
        };
        const options = {
            method: "GET",
            url: path,
            qs,
            useQuerystring: true,
        };
        return new Promise((resolve, reject) => {
            (0, request_1.default)(options, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                if (auto_filled) {
                    if (body.data?.access_token)
                        this.access_token = body.data?.access_token;
                    if (body.data?.refresh_token)
                        this.refresh_token = body.data?.refresh_token;
                }
                resolve({
                    response,
                    body,
                });
            });
        });
    }
}
exports.AccessToken = AccessToken;
class AccessTokenBuilder {
    static build(access_token, refresh_token, config) {
        return new AccessToken({
            access_token,
            refresh_token,
            config,
        });
    }
}
exports.AccessTokenBuilder = AccessTokenBuilder;
class AccessTokenTool {
    static async refreshToken(refresh_token, app_key, app_secret) {
        let _app_key = app_key || config_1.ClientConfiguration.globalConfig.app_key;
        let _app_secret = app_secret || config_1.ClientConfiguration.globalConfig.app_secret;
        if (!_app_key) {
            throw new Error("app_key is required");
        }
        if (!_app_secret) {
            throw new Error("app_secret is required");
        }
        if (!refresh_token) {
            throw new Error("refresh_token is required");
        }
        const path = auth_host + refresh_token_path;
        const qs = {
            grant_type,
            refresh_token,
            app_key: _app_key,
            app_secret: _app_secret,
        };
        const options = {
            method: "GET",
            url: path,
            qs,
            useQuerystring: true,
        };
        return new Promise((resolve, reject) => {
            (0, request_1.default)(options, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    response,
                    body,
                });
            });
        });
    }
    static async getAccessToken(auth_code, app_key, app_secret) {
        let _app_key = app_key || config_1.ClientConfiguration.globalConfig.app_key;
        let _app_secret = app_secret || config_1.ClientConfiguration.globalConfig.app_secret;
        if (!_app_key) {
            throw new Error("app_key is required");
        }
        if (!_app_secret) {
            throw new Error("app_secret is required");
        }
        if (!auth_code) {
            throw new Error("auth_code is required");
        }
        const path = auth_host + get_access_token_path;
        const qs = {
            grant_type,
            auth_code,
            app_key: _app_key,
            app_secret: _app_secret,
        };
        const options = {
            method: "GET",
            url: path,
            qs,
            useQuerystring: true,
        };
        return new Promise((resolve, reject) => {
            (0, request_1.default)(options, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    response,
                    body,
                });
            });
        });
    }
}
exports.AccessTokenTool = AccessTokenTool;
//# sourceMappingURL=token.js.map