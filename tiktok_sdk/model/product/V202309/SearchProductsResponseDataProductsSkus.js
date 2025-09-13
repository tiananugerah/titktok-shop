"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchProductsResponseDataProductsSkus = void 0;
class Product202309SearchProductsResponseDataProductsSkus {
    static getAttributeTypeMap() {
        return Product202309SearchProductsResponseDataProductsSkus.attributeTypeMap;
    }
}
exports.Product202309SearchProductsResponseDataProductsSkus = Product202309SearchProductsResponseDataProductsSkus;
Product202309SearchProductsResponseDataProductsSkus.discriminator = undefined;
Product202309SearchProductsResponseDataProductsSkus.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309SearchProductsResponseDataProductsSkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309SearchProductsResponseDataProductsSkusPrice"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=SearchProductsResponseDataProductsSkus.js.map