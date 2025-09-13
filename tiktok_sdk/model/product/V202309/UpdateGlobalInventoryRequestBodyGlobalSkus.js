"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdateGlobalInventoryRequestBodyGlobalSkus = void 0;
class Product202309UpdateGlobalInventoryRequestBodyGlobalSkus {
    static getAttributeTypeMap() {
        return Product202309UpdateGlobalInventoryRequestBodyGlobalSkus.attributeTypeMap;
    }
}
exports.Product202309UpdateGlobalInventoryRequestBodyGlobalSkus = Product202309UpdateGlobalInventoryRequestBodyGlobalSkus;
Product202309UpdateGlobalInventoryRequestBodyGlobalSkus.discriminator = undefined;
Product202309UpdateGlobalInventoryRequestBodyGlobalSkus.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309UpdateGlobalInventoryRequestBodyGlobalSkusInventory>"
    }
];
//# sourceMappingURL=UpdateGlobalInventoryRequestBodyGlobalSkus.js.map