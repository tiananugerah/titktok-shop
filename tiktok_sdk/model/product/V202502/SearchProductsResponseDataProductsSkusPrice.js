"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponseDataProductsSkusPrice = void 0;
class Product202502SearchProductsResponseDataProductsSkusPrice {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponseDataProductsSkusPrice.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponseDataProductsSkusPrice = Product202502SearchProductsResponseDataProductsSkusPrice;
Product202502SearchProductsResponseDataProductsSkusPrice.discriminator = undefined;
Product202502SearchProductsResponseDataProductsSkusPrice.attributeTypeMap = [
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