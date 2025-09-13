"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBodyReplicatedProductsSkus = void 0;
class Product202309EditProductRequestBodyReplicatedProductsSkus {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBodyReplicatedProductsSkus.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBodyReplicatedProductsSkus = Product202309EditProductRequestBodyReplicatedProductsSkus;
Product202309EditProductRequestBodyReplicatedProductsSkus.discriminator = undefined;
Product202309EditProductRequestBodyReplicatedProductsSkus.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309EditProductRequestBodyReplicatedProductsSkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309EditProductRequestBodyReplicatedProductsSkusPrice"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=EditProductRequestBodyReplicatedProductsSkus.js.map