"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductResponseData = void 0;
class Product202309CreateProductResponseData {
    static getAttributeTypeMap() {
        return Product202309CreateProductResponseData.attributeTypeMap;
    }
}
exports.Product202309CreateProductResponseData = Product202309CreateProductResponseData;
Product202309CreateProductResponseData.discriminator = undefined;
Product202309CreateProductResponseData.attributeTypeMap = [
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309CreateProductResponseDataSkus>"
    },
    {
        "name": "warnings",
        "baseName": "warnings",
        "type": "Array<Product202309CreateProductResponseDataWarnings>"
    }
];
//# sourceMappingURL=CreateProductResponseData.js.map