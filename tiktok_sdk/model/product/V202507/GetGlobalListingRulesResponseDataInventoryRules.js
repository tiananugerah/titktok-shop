"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507GetGlobalListingRulesResponseDataInventoryRules = void 0;
class Product202507GetGlobalListingRulesResponseDataInventoryRules {
    static getAttributeTypeMap() {
        return Product202507GetGlobalListingRulesResponseDataInventoryRules.attributeTypeMap;
    }
}
exports.Product202507GetGlobalListingRulesResponseDataInventoryRules = Product202507GetGlobalListingRulesResponseDataInventoryRules;
Product202507GetGlobalListingRulesResponseDataInventoryRules.discriminator = undefined;
Product202507GetGlobalListingRulesResponseDataInventoryRules.attributeTypeMap = [
    {
        "name": "allocationMode",
        "baseName": "allocation_mode",
        "type": "string"
    },
    {
        "name": "associatedWarehouses",
        "baseName": "associated_warehouses",
        "type": "Array<Product202507GetGlobalListingRulesResponseDataInventoryRulesAssociatedWarehouses>"
    },
    {
        "name": "localWarehouseId",
        "baseName": "local_warehouse_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetGlobalListingRulesResponseDataInventoryRules.js.map