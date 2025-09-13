"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309InventorySearchResponseDataInventory = void 0;
class Product202309InventorySearchResponseDataInventory {
    static getAttributeTypeMap() {
        return Product202309InventorySearchResponseDataInventory.attributeTypeMap;
    }
}
exports.Product202309InventorySearchResponseDataInventory = Product202309InventorySearchResponseDataInventory;
Product202309InventorySearchResponseDataInventory.discriminator = undefined;
Product202309InventorySearchResponseDataInventory.attributeTypeMap = [
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309InventorySearchResponseDataInventorySkus>"
    }
];
//# sourceMappingURL=InventorySearchResponseDataInventory.js.map