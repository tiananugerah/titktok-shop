"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchGlobalProductsResponseData = void 0;
class Product202312SearchGlobalProductsResponseData {
    static getAttributeTypeMap() {
        return Product202312SearchGlobalProductsResponseData.attributeTypeMap;
    }
}
exports.Product202312SearchGlobalProductsResponseData = Product202312SearchGlobalProductsResponseData;
Product202312SearchGlobalProductsResponseData.discriminator = undefined;
Product202312SearchGlobalProductsResponseData.attributeTypeMap = [
    {
        "name": "globalProducts",
        "baseName": "global_products",
        "type": "Array<Product202312SearchGlobalProductsResponseDataGlobalProducts>"
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