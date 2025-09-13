"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductRequestBodySkusPrice = void 0;
class Product202309CreateProductRequestBodySkusPrice {
    static getAttributeTypeMap() {
        return Product202309CreateProductRequestBodySkusPrice.attributeTypeMap;
    }
}
exports.Product202309CreateProductRequestBodySkusPrice = Product202309CreateProductRequestBodySkusPrice;
Product202309CreateProductRequestBodySkusPrice.discriminator = undefined;
Product202309CreateProductRequestBodySkusPrice.attributeTypeMap = [
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
//# sourceMappingURL=CreateProductRequestBodySkusPrice.js.map