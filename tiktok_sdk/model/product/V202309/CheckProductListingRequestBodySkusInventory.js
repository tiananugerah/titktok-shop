"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBodySkusInventory = void 0;
class Product202309CheckProductListingRequestBodySkusInventory {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBodySkusInventory.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBodySkusInventory = Product202309CheckProductListingRequestBodySkusInventory;
Product202309CheckProductListingRequestBodySkusInventory.discriminator = undefined;
Product202309CheckProductListingRequestBodySkusInventory.attributeTypeMap = [
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "warehouseId",
        "baseName": "warehouse_id",
        "type": "string"
    }
];
//# sourceMappingURL=CheckProductListingRequestBodySkusInventory.js.map