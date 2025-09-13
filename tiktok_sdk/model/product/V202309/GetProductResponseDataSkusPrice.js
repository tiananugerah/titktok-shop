"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkusPrice = void 0;
class Product202309GetProductResponseDataSkusPrice {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkusPrice.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkusPrice = Product202309GetProductResponseDataSkusPrice;
Product202309GetProductResponseDataSkusPrice.discriminator = undefined;
Product202309GetProductResponseDataSkusPrice.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "salePrice",
        "baseName": "sale_price",
        "type": "string"
    },
    {
        "name": "taxExclusivePrice",
        "baseName": "tax_exclusive_price",
        "type": "string"
    },
    {
        "name": "unitPrice",
        "baseName": "unit_price",
        "type": "string"
    }
];
//# sourceMappingURL=GetProductResponseDataSkusPrice.js.map