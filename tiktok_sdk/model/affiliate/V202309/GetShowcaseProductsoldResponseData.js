"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetShowcaseProductsoldResponseData = void 0;
class Affiliate202309GetShowcaseProductsoldResponseData {
    static getAttributeTypeMap() {
        return Affiliate202309GetShowcaseProductsoldResponseData.attributeTypeMap;
    }
}
exports.Affiliate202309GetShowcaseProductsoldResponseData = Affiliate202309GetShowcaseProductsoldResponseData;
Affiliate202309GetShowcaseProductsoldResponseData.discriminator = undefined;
Affiliate202309GetShowcaseProductsoldResponseData.attributeTypeMap = [
    {
        "name": "liveProductIds",
        "baseName": "live_product_ids",
        "type": "Array<string>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Affiliate202309GetShowcaseProductsoldResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetShowcaseProductsoldResponseData.js.map