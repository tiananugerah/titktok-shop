"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309InventorySearchResponseDataInventorySkusWarehouseInventory = void 0;
class Product202309InventorySearchResponseDataInventorySkusWarehouseInventory {
    static getAttributeTypeMap() {
        return Product202309InventorySearchResponseDataInventorySkusWarehouseInventory.attributeTypeMap;
    }
}
exports.Product202309InventorySearchResponseDataInventorySkusWarehouseInventory = Product202309InventorySearchResponseDataInventorySkusWarehouseInventory;
Product202309InventorySearchResponseDataInventorySkusWarehouseInventory.discriminator = undefined;
Product202309InventorySearchResponseDataInventorySkusWarehouseInventory.attributeTypeMap = [
    {
        "name": "availableQuantity",
        "baseName": "available_quantity",
        "type": "number"
    },
    {
        "name": "committedQuantity",
        "baseName": "committed_quantity",
        "type": "number"
    },
    {
        "name": "warehouseId",
        "baseName": "warehouse_id",
        "type": "string"
    }
];
//# sourceMappingURL=InventorySearchResponseDataInventorySkusWarehouseInventory.js.map