"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductRequestBodySkusPreSale = void 0;
class Product202309CreateProductRequestBodySkusPreSale {
    static getAttributeTypeMap() {
        return Product202309CreateProductRequestBodySkusPreSale.attributeTypeMap;
    }
}
exports.Product202309CreateProductRequestBodySkusPreSale = Product202309CreateProductRequestBodySkusPreSale;
Product202309CreateProductRequestBodySkusPreSale.discriminator = undefined;
Product202309CreateProductRequestBodySkusPreSale.attributeTypeMap = [
    {
        "name": "fulfillmentType",
        "baseName": "fulfillment_type",
        "type": "Product202309CreateProductRequestBodySkusPreSaleFulfillmentType"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=CreateProductRequestBodySkusPreSale.js.map