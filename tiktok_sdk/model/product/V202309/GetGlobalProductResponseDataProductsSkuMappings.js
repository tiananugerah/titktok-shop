"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponseDataProductsSkuMappings = void 0;
class Product202309GetGlobalProductResponseDataProductsSkuMappings {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponseDataProductsSkuMappings.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponseDataProductsSkuMappings = Product202309GetGlobalProductResponseDataProductsSkuMappings;
Product202309GetGlobalProductResponseDataProductsSkuMappings.discriminator = undefined;
Product202309GetGlobalProductResponseDataProductsSkuMappings.attributeTypeMap = [
    {
        "name": "globalSkuId",
        "baseName": "global_sku_id",
        "type": "string"
    },
    {
        "name": "localSkuId",
        "baseName": "local_sku_id",
        "type": "string"
    },
    {
        "name": "salesAttributeMappings",
        "baseName": "sales_attribute_mappings",
        "type": "Array<Product202309GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings>"
    }
];
//# sourceMappingURL=GetGlobalProductResponseDataProductsSkuMappings.js.map