"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponseDataProducts = void 0;
class Product202309GetGlobalProductResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponseDataProducts = Product202309GetGlobalProductResponseDataProducts;
Product202309GetGlobalProductResponseDataProducts.discriminator = undefined;
Product202309GetGlobalProductResponseDataProducts.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "skuMappings",
        "baseName": "sku_mappings",
        "type": "Array<Product202309GetGlobalProductResponseDataProductsSkuMappings>"
    }
];
//# sourceMappingURL=GetGlobalProductResponseDataProducts.js.map