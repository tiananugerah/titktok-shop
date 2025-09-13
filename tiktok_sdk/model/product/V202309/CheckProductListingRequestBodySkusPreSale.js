"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBodySkusPreSale = void 0;
class Product202309CheckProductListingRequestBodySkusPreSale {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBodySkusPreSale.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBodySkusPreSale = Product202309CheckProductListingRequestBodySkusPreSale;
Product202309CheckProductListingRequestBodySkusPreSale.discriminator = undefined;
Product202309CheckProductListingRequestBodySkusPreSale.attributeTypeMap = [
    {
        "name": "fulfillmentType",
        "baseName": "fulfillment_type",
        "type": "Product202309CheckProductListingRequestBodySkusPreSaleFulfillmentType"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=CheckProductListingRequestBodySkusPreSale.js.map