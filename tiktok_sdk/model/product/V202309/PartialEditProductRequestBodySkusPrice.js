"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodySkusPrice = void 0;
class Product202309PartialEditProductRequestBodySkusPrice {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodySkusPrice.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodySkusPrice = Product202309PartialEditProductRequestBodySkusPrice;
Product202309PartialEditProductRequestBodySkusPrice.discriminator = undefined;
Product202309PartialEditProductRequestBodySkusPrice.attributeTypeMap = [
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
//# sourceMappingURL=PartialEditProductRequestBodySkusPrice.js.map