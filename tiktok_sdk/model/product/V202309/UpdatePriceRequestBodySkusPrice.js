"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdatePriceRequestBodySkusPrice = void 0;
class Product202309UpdatePriceRequestBodySkusPrice {
    static getAttributeTypeMap() {
        return Product202309UpdatePriceRequestBodySkusPrice.attributeTypeMap;
    }
}
exports.Product202309UpdatePriceRequestBodySkusPrice = Product202309UpdatePriceRequestBodySkusPrice;
Product202309UpdatePriceRequestBodySkusPrice.discriminator = undefined;
Product202309UpdatePriceRequestBodySkusPrice.attributeTypeMap = [
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
//# sourceMappingURL=UpdatePriceRequestBodySkusPrice.js.map