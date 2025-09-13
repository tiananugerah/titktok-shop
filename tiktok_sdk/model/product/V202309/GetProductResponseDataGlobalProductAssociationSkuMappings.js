"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataGlobalProductAssociationSkuMappings = void 0;
class Product202309GetProductResponseDataGlobalProductAssociationSkuMappings {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataGlobalProductAssociationSkuMappings.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataGlobalProductAssociationSkuMappings = Product202309GetProductResponseDataGlobalProductAssociationSkuMappings;
Product202309GetProductResponseDataGlobalProductAssociationSkuMappings.discriminator = undefined;
Product202309GetProductResponseDataGlobalProductAssociationSkuMappings.attributeTypeMap = [
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
        "type": "Array<Product202309GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings>"
    }
];
//# sourceMappingURL=GetProductResponseDataGlobalProductAssociationSkuMappings.js.map