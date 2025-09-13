"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBodySkusPrice = void 0;
class Product202309CheckProductListingRequestBodySkusPrice {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBodySkusPrice.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBodySkusPrice = Product202309CheckProductListingRequestBodySkusPrice;
Product202309CheckProductListingRequestBodySkusPrice.discriminator = undefined;
Product202309CheckProductListingRequestBodySkusPrice.attributeTypeMap = [
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
//# sourceMappingURL=CheckProductListingRequestBodySkusPrice.js.map