"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309InventorySearchResponseData = void 0;
class Product202309InventorySearchResponseData {
    static getAttributeTypeMap() {
        return Product202309InventorySearchResponseData.attributeTypeMap;
    }
}
exports.Product202309InventorySearchResponseData = Product202309InventorySearchResponseData;
Product202309InventorySearchResponseData.discriminator = undefined;
Product202309InventorySearchResponseData.attributeTypeMap = [
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309InventorySearchResponseDataInventory>"
    }
];
//# sourceMappingURL=InventorySearchResponseData.js.map