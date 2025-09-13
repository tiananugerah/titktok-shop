"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductRequestBodySkusInventory = void 0;
class Product202309CreateProductRequestBodySkusInventory {
    static getAttributeTypeMap() {
        return Product202309CreateProductRequestBodySkusInventory.attributeTypeMap;
    }
}
exports.Product202309CreateProductRequestBodySkusInventory = Product202309CreateProductRequestBodySkusInventory;
Product202309CreateProductRequestBodySkusInventory.discriminator = undefined;
Product202309CreateProductRequestBodySkusInventory.attributeTypeMap = [
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
//# sourceMappingURL=CreateProductRequestBodySkusInventory.js.map