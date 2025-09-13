"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507GetGlobalListingRulesResponseData = void 0;
class Product202507GetGlobalListingRulesResponseData {
    static getAttributeTypeMap() {
        return Product202507GetGlobalListingRulesResponseData.attributeTypeMap;
    }
}
exports.Product202507GetGlobalListingRulesResponseData = Product202507GetGlobalListingRulesResponseData;
Product202507GetGlobalListingRulesResponseData.discriminator = undefined;
Product202507GetGlobalListingRulesResponseData.attributeTypeMap = [
    {
        "name": "inventoryRules",
        "baseName": "inventory_rules",
        "type": "Array<Product202507GetGlobalListingRulesResponseDataInventoryRules>"
    },
    {
        "name": "listingMethods",
        "baseName": "listing_methods",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=GetGlobalListingRulesResponseData.js.map