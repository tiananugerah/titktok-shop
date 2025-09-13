"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBodySkusPrice = void 0;
class Product202309EditProductRequestBodySkusPrice {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBodySkusPrice.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBodySkusPrice = Product202309EditProductRequestBodySkusPrice;
Product202309EditProductRequestBodySkusPrice.discriminator = undefined;
Product202309EditProductRequestBodySkusPrice.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "salePrice",
        "baseName": "sale_price",
        "type": "string"
    }
];
//# sourceMappingURL=EditProductRequestBodySkusPrice.js.map