"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkusPreSale = void 0;
class Product202309GetProductResponseDataSkusPreSale {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkusPreSale.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkusPreSale = Product202309GetProductResponseDataSkusPreSale;
Product202309GetProductResponseDataSkusPreSale.discriminator = undefined;
Product202309GetProductResponseDataSkusPreSale.attributeTypeMap = [
    {
        "name": "fulfillmentType",
        "baseName": "fulfillment_type",
        "type": "Product202309GetProductResponseDataSkusPreSaleFulfillmentType"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=GetProductResponseDataSkusPreSale.js.map