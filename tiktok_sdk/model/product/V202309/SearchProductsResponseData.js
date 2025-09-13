"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchProductsResponseData = void 0;
class Product202309SearchProductsResponseData {
    static getAttributeTypeMap() {
        return Product202309SearchProductsResponseData.attributeTypeMap;
    }
}
exports.Product202309SearchProductsResponseData = Product202309SearchProductsResponseData;
Product202309SearchProductsResponseData.discriminator = undefined;
Product202309SearchProductsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Product202309SearchProductsResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchProductsResponseData.js.map