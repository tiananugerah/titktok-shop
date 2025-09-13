"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkusCombinedSkusPrice = void 0;
class Product202309GetProductResponseDataSkusCombinedSkusPrice {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkusCombinedSkusPrice.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkusCombinedSkusPrice = Product202309GetProductResponseDataSkusCombinedSkusPrice;
Product202309GetProductResponseDataSkusCombinedSkusPrice.discriminator = undefined;
Product202309GetProductResponseDataSkusCombinedSkusPrice.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=GetProductResponseDataSkusCombinedSkusPrice.js.map