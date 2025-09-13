"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetShowcaseProductsoldResponse = void 0;
class Affiliate202309GetShowcaseProductsoldResponse {
    static getAttributeTypeMap() {
        return Affiliate202309GetShowcaseProductsoldResponse.attributeTypeMap;
    }
}
exports.Affiliate202309GetShowcaseProductsoldResponse = Affiliate202309GetShowcaseProductsoldResponse;
Affiliate202309GetShowcaseProductsoldResponse.discriminator = undefined;
Affiliate202309GetShowcaseProductsoldResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Affiliate202309GetShowcaseProductsoldResponseData"
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
//# sourceMappingURL=GetShowcaseProductsoldResponse.js.map