"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBodySkusPreSale = void 0;
class Product202309EditProductRequestBodySkusPreSale {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBodySkusPreSale.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBodySkusPreSale = Product202309EditProductRequestBodySkusPreSale;
Product202309EditProductRequestBodySkusPreSale.discriminator = undefined;
Product202309EditProductRequestBodySkusPreSale.attributeTypeMap = [
    {
        "name": "fulfillmentType",
        "baseName": "fulfillment_type",
        "type": "Product202309EditProductRequestBodySkusPreSaleFulfillmentType"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=EditProductRequestBodySkusPreSale.js.map