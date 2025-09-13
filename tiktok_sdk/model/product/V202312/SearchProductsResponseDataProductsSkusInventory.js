"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsResponseDataProductsSkusInventory = void 0;
class Product202312SearchProductsResponseDataProductsSkusInventory {
    static getAttributeTypeMap() {
        return Product202312SearchProductsResponseDataProductsSkusInventory.attributeTypeMap;
    }
}
exports.Product202312SearchProductsResponseDataProductsSkusInventory = Product202312SearchProductsResponseDataProductsSkusInventory;
Product202312SearchProductsResponseDataProductsSkusInventory.discriminator = undefined;
Product202312SearchProductsResponseDataProductsSkusInventory.attributeTypeMap = [
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