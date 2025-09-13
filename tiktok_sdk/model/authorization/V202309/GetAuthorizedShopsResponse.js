"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization202309GetAuthorizedShopsResponse = void 0;
class Authorization202309GetAuthorizedShopsResponse {
    static getAttributeTypeMap() {
        return Authorization202309GetAuthorizedShopsResponse.attributeTypeMap;
    }
}
exports.Authorization202309GetAuthorizedShopsResponse = Authorization202309GetAuthorizedShopsResponse;
Authorization202309GetAuthorizedShopsResponse.discriminator = undefined;
Authorization202309GetAuthorizedShopsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Authorization202309GetAuthorizedShopsResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetAuthorizedShopsResponse.js.map