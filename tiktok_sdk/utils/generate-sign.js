"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSign = void 0;
const crypto_1 = __importDefault(require("crypto"));
const excludeKeys = ["access_token", "sign"];
const generateSign = (requestOption, app_secret) => {
    let signString = "";
    const params = requestOption.qs || {};
    const sortedParams = Object.keys(params)
        .filter((key) => !excludeKeys.includes(key))
        .sort()
        .map((key) => ({ key, value: params[key] }));
    const paramString = sortedParams
        .map(({ key, value }) => `${key}${value}`)
        .join("");
    signString += paramString;
    const pathname = new URL(requestOption.uri || '').pathname;
    signString = `${pathname}${paramString}`;
    if (requestOption.headers?.["content_type"] !== "multipart/form-data" &&
        requestOption.body &&
        Object.keys(requestOption.body).length) {
        const body = JSON.stringify(requestOption.body);
        signString += body;
    }
    signString = `${app_secret}${signString}${app_secret}`;
    const hmac = crypto_1.default.createHmac("sha256", app_secret);
    hmac.update(signString);
    const sign = hmac.digest("hex");
    return sign;
};
exports.generateSign = generateSign;
//# sourceMappingURL=generate-sign.js.map