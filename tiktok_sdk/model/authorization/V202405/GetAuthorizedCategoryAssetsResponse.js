"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization202405GetAuthorizedCategoryAssetsResponse = void 0;
class Authorization202405GetAuthorizedCategoryAssetsResponse {
    static getAttributeTypeMap() {
        return Authorization202405GetAuthorizedCategoryAssetsResponse.attributeTypeMap;
    }
}
exports.Authorization202405GetAuthorizedCategoryAssetsResponse = Authorization202405GetAuthorizedCategoryAssetsResponse;
Authorization202405GetAuthorizedCategoryAssetsResponse.discriminator = undefined;
Authorization202405GetAuthorizedCategoryAssetsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Authorization202405GetAuthorizedCategoryAssetsResponseData"
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
//# sourceMappingURL=GetAuthorizedCategoryAssetsResponse.js.map