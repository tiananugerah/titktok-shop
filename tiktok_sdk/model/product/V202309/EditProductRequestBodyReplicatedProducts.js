"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBodyReplicatedProducts = void 0;
class Product202309EditProductRequestBodyReplicatedProducts {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBodyReplicatedProducts.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBodyReplicatedProducts = Product202309EditProductRequestBodyReplicatedProducts;
Product202309EditProductRequestBodyReplicatedProducts.discriminator = undefined;
Product202309EditProductRequestBodyReplicatedProducts.attributeTypeMap = [
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309EditProductRequestBodyReplicatedProductsSkus>"
    }
];
//# sourceMappingURL=EditProductRequestBodyReplicatedProducts.js.map