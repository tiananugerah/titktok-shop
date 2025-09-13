"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309InventorySearchRequestBody = void 0;
class Product202309InventorySearchRequestBody {
    static getAttributeTypeMap() {
        return Product202309InventorySearchRequestBody.attributeTypeMap;
    }
}
exports.Product202309InventorySearchRequestBody = Product202309InventorySearchRequestBody;
Product202309InventorySearchRequestBody.discriminator = undefined;
Product202309InventorySearchRequestBody.attributeTypeMap = [
    {
        "name": "productIds",
        "baseName": "product_ids",
        "type": "Array<string>"
    },
    {
        "name": "skuIds",
        "baseName": "sku_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=InventorySearchRequestBody.js.map