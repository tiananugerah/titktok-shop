"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchProductsResponseDataProductsSkusInventory = void 0;
class Product202309SearchProductsResponseDataProductsSkusInventory {
    static getAttributeTypeMap() {
        return Product202309SearchProductsResponseDataProductsSkusInventory.attributeTypeMap;
    }
}
exports.Product202309SearchProductsResponseDataProductsSkusInventory = Product202309SearchProductsResponseDataProductsSkusInventory;
Product202309SearchProductsResponseDataProductsSkusInventory.discriminator = undefined;
Product202309SearchProductsResponseDataProductsSkusInventory.attributeTypeMap = [
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