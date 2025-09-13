"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponseData = void 0;
class Product202502SearchProductsResponseData {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponseData.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponseData = Product202502SearchProductsResponseData;
Product202502SearchProductsResponseData.discriminator = undefined;
Product202502SearchProductsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Product202502SearchProductsResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchProductsResponseData.js.map