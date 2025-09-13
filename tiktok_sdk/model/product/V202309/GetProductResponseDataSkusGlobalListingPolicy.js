"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkusGlobalListingPolicy = void 0;
class Product202309GetProductResponseDataSkusGlobalListingPolicy {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkusGlobalListingPolicy.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkusGlobalListingPolicy = Product202309GetProductResponseDataSkusGlobalListingPolicy;
Product202309GetProductResponseDataSkusGlobalListingPolicy.discriminator = undefined;
Product202309GetProductResponseDataSkusGlobalListingPolicy.attributeTypeMap = [
    {
        "name": "inventoryType",
        "baseName": "inventory_type",
        "type": "string"
    },
    {
        "name": "priceSync",
        "baseName": "price_sync",
        "type": "boolean"
    },
    {
        "name": "replicateSource",
        "baseName": "replicate_source",
        "type": "Product202309GetProductResponseDataSkusGlobalListingPolicyReplicateSource"
    }
];
//# sourceMappingURL=GetProductResponseDataSkusGlobalListingPolicy.js.map