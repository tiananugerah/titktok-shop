"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodyReplicatedProducts = void 0;
class Product202309PartialEditProductRequestBodyReplicatedProducts {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodyReplicatedProducts.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodyReplicatedProducts = Product202309PartialEditProductRequestBodyReplicatedProducts;
Product202309PartialEditProductRequestBodyReplicatedProducts.discriminator = undefined;
Product202309PartialEditProductRequestBodyReplicatedProducts.attributeTypeMap = [
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309PartialEditProductRequestBodyReplicatedProductsSkus>"
    }
];
//# sourceMappingURL=PartialEditProductRequestBodyReplicatedProducts.js.map