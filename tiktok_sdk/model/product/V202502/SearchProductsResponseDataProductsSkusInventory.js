"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponseDataProductsSkusInventory = void 0;
class Product202502SearchProductsResponseDataProductsSkusInventory {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponseDataProductsSkusInventory.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponseDataProductsSkusInventory = Product202502SearchProductsResponseDataProductsSkusInventory;
Product202502SearchProductsResponseDataProductsSkusInventory.discriminator = undefined;
Product202502SearchProductsResponseDataProductsSkusInventory.attributeTypeMap = [
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
//# sourceMappingURL=SearchProductsResponseDataProductsSkusInventory.js.map