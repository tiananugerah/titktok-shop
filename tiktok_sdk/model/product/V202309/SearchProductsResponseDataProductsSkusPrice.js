"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchProductsResponseDataProductsSkusPrice = void 0;
class Product202309SearchProductsResponseDataProductsSkusPrice {
    static getAttributeTypeMap() {
        return Product202309SearchProductsResponseDataProductsSkusPrice.attributeTypeMap;
    }
}
exports.Product202309SearchProductsResponseDataProductsSkusPrice = Product202309SearchProductsResponseDataProductsSkusPrice;
Product202309SearchProductsResponseDataProductsSkusPrice.discriminator = undefined;
Product202309SearchProductsResponseDataProductsSkusPrice.attributeTypeMap = [
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