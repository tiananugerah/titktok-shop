"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309InventorySearchResponseDataInventorySkus = void 0;
class Product202309InventorySearchResponseDataInventorySkus {
    static getAttributeTypeMap() {
        return Product202309InventorySearchResponseDataInventorySkus.attributeTypeMap;
    }
}
exports.Product202309InventorySearchResponseDataInventorySkus = Product202309InventorySearchResponseDataInventorySkus;
Product202309InventorySearchResponseDataInventorySkus.discriminator = undefined;
Product202309InventorySearchResponseDataInventorySkus.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    },
    {
        "name": "totalAvailableInventoryDistribution",
        "baseName": "total_available_inventory_distribution",
        "type": "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution"
    },
    {
        "name": "totalAvailableQuantity",
        "baseName": "total_available_quantity",
        "type": "number"
    },
    {
        "name": "totalCommittedQuantity",
        "baseName": "total_committed_quantity",
        "type": "number"
    },
    {
        "name": "warehouseInventory",
        "baseName": "warehouse_inventory",
        "type": "Array<Product202309InventorySearchResponseDataInventorySkusWarehouseInventory>"
    }
];
//# sourceMappingURL=InventorySearchResponseDataInventorySkus.js.map