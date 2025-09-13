"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetShopProductsResponse = void 0;
class Affiliate202309GetShopProductsResponse {
    static getAttributeTypeMap() {
        return Affiliate202309GetShopProductsResponse.attributeTypeMap;
    }
}
exports.Affiliate202309GetShopProductsResponse = Affiliate202309GetShopProductsResponse;
Affiliate202309GetShopProductsResponse.discriminator = undefined;
Affiliate202309GetShopProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Affiliate202309GetShopProductsResponseData"
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
//# sourceMappingURL=GetShopProductsResponse.js.map