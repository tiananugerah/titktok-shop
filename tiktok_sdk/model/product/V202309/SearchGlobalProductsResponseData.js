"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchGlobalProductsResponseData = void 0;
class Product202309SearchGlobalProductsResponseData {
    static getAttributeTypeMap() {
        return Product202309SearchGlobalProductsResponseData.attributeTypeMap;
    }
}
exports.Product202309SearchGlobalProductsResponseData = Product202309SearchGlobalProductsResponseData;
Product202309SearchGlobalProductsResponseData.discriminator = undefined;
Product202309SearchGlobalProductsResponseData.attributeTypeMap = [
    {
        "name": "globalProducts",
        "baseName": "global_products",
        "type": "Array<Product202309SearchGlobalProductsResponseDataGlobalProducts>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchGlobalProductsResponseData.js.map