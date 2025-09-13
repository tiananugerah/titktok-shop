"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetShopProductsResponseData = void 0;
class Affiliate202309GetShopProductsResponseData {
    static getAttributeTypeMap() {
        return Affiliate202309GetShopProductsResponseData.attributeTypeMap;
    }
}
exports.Affiliate202309GetShopProductsResponseData = Affiliate202309GetShopProductsResponseData;
Affiliate202309GetShopProductsResponseData.discriminator = undefined;
Affiliate202309GetShopProductsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Affiliate202309GetShopProductsResponseDataProducts>"
    }
];
//# sourceMappingURL=GetShopProductsResponseData.js.map