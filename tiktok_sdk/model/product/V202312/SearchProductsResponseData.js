"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsResponseData = void 0;
class Product202312SearchProductsResponseData {
    static getAttributeTypeMap() {
        return Product202312SearchProductsResponseData.attributeTypeMap;
    }
}
exports.Product202312SearchProductsResponseData = Product202312SearchProductsResponseData;
Product202312SearchProductsResponseData.discriminator = undefined;
Product202312SearchProductsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Product202312SearchProductsResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchProductsResponseData.js.map