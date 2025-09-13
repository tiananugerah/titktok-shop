"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsResponseDataProductsSkusPrice = void 0;
class Product202312SearchProductsResponseDataProductsSkusPrice {
    static getAttributeTypeMap() {
        return Product202312SearchProductsResponseDataProductsSkusPrice.attributeTypeMap;
    }
}
exports.Product202312SearchProductsResponseDataProductsSkusPrice = Product202312SearchProductsResponseDataProductsSkusPrice;
Product202312SearchProductsResponseDataProductsSkusPrice.discriminator = undefined;
Product202312SearchProductsResponseDataProductsSkusPrice.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "salePrice",
        "baseName": "sale_price",
        "type": "string"
    },
    {
        "name": "taxExclusivePrice",
        "baseName": "tax_exclusive_price",
        "type": "string"
    }
];
//# sourceMappingURL=SearchProductsResponseDataProductsSkusPrice.js.map