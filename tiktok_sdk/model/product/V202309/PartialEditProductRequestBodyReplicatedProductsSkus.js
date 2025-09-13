"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodyReplicatedProductsSkus = void 0;
class Product202309PartialEditProductRequestBodyReplicatedProductsSkus {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodyReplicatedProductsSkus.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodyReplicatedProductsSkus = Product202309PartialEditProductRequestBodyReplicatedProductsSkus;
Product202309PartialEditProductRequestBodyReplicatedProductsSkus.discriminator = undefined;
Product202309PartialEditProductRequestBodyReplicatedProductsSkus.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309PartialEditProductRequestBodyReplicatedProductsSkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309PartialEditProductRequestBodyReplicatedProductsSkusPrice"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=PartialEditProductRequestBodyReplicatedProductsSkus.js.map