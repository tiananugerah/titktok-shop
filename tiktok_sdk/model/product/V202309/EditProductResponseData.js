"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductResponseData = void 0;
class Product202309EditProductResponseData {
    static getAttributeTypeMap() {
        return Product202309EditProductResponseData.attributeTypeMap;
    }
}
exports.Product202309EditProductResponseData = Product202309EditProductResponseData;
Product202309EditProductResponseData.discriminator = undefined;
Product202309EditProductResponseData.attributeTypeMap = [
    {
        "name": "audit",
        "baseName": "audit",
        "type": "Product202309EditProductResponseDataAudit"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309EditProductResponseDataSkus>"
    },
    {
        "name": "warnings",
        "baseName": "warnings",
        "type": "Array<Product202309EditProductResponseDataWarnings>"
    }
];
//# sourceMappingURL=EditProductResponseData.js.map