"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodySkusPreSale = void 0;
class Product202309PartialEditProductRequestBodySkusPreSale {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodySkusPreSale.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodySkusPreSale = Product202309PartialEditProductRequestBodySkusPreSale;
Product202309PartialEditProductRequestBodySkusPreSale.discriminator = undefined;
Product202309PartialEditProductRequestBodySkusPreSale.attributeTypeMap = [
    {
        "name": "fulfillmentType",
        "baseName": "fulfillment_type",
        "type": "Product202309PartialEditProductRequestBodySkusPreSaleFulfillmentType"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=PartialEditProductRequestBodySkusPreSale.js.map