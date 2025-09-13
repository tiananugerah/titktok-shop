"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataGlobalProductAssociation = void 0;
class Product202309GetProductResponseDataGlobalProductAssociation {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataGlobalProductAssociation.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataGlobalProductAssociation = Product202309GetProductResponseDataGlobalProductAssociation;
Product202309GetProductResponseDataGlobalProductAssociation.discriminator = undefined;
Product202309GetProductResponseDataGlobalProductAssociation.attributeTypeMap = [
    {
        "name": "globalProductId",
        "baseName": "global_product_id",
        "type": "string"
    },
    {
        "name": "skuMappings",
        "baseName": "sku_mappings",
        "type": "Array<Product202309GetProductResponseDataGlobalProductAssociationSkuMappings>"
    }
];
//# sourceMappingURL=GetProductResponseDataGlobalProductAssociation.js.map