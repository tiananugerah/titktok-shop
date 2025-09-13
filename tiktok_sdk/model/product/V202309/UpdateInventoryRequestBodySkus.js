"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdateInventoryRequestBodySkus = void 0;
class Product202309UpdateInventoryRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309UpdateInventoryRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309UpdateInventoryRequestBodySkus = Product202309UpdateInventoryRequestBodySkus;
Product202309UpdateInventoryRequestBodySkus.discriminator = undefined;
Product202309UpdateInventoryRequestBodySkus.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309UpdateInventoryRequestBodySkusInventory>"
    }
];
//# sourceMappingURL=UpdateInventoryRequestBodySkus.js.map