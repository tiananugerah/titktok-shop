"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309AddShowcaseProductsoldResponse = void 0;
class Affiliate202309AddShowcaseProductsoldResponse {
    static getAttributeTypeMap() {
        return Affiliate202309AddShowcaseProductsoldResponse.attributeTypeMap;
    }
}
exports.Affiliate202309AddShowcaseProductsoldResponse = Affiliate202309AddShowcaseProductsoldResponse;
Affiliate202309AddShowcaseProductsoldResponse.discriminator = undefined;
Affiliate202309AddShowcaseProductsoldResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Affiliate202309AddShowcaseProductsoldResponseData"
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
//# sourceMappingURL=AddShowcaseProductsoldResponse.js.map