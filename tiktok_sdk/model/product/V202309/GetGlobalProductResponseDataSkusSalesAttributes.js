"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponseDataSkusSalesAttributes = void 0;
class Product202309GetGlobalProductResponseDataSkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponseDataSkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponseDataSkusSalesAttributes = Product202309GetGlobalProductResponseDataSkusSalesAttributes;
Product202309GetGlobalProductResponseDataSkusSalesAttributes.discriminator = undefined;
Product202309GetGlobalProductResponseDataSkusSalesAttributes.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "skuImg",
        "baseName": "sku_img",
        "type": "Product202309GetGlobalProductResponseDataSkusSalesAttributesSkuImg"
    },
    {
        "name": "valueId",
        "baseName": "value_id",
        "type": "string"
    },
    {
        "name": "valueName",
        "baseName": "value_name",
        "type": "string"
    }
];
//# sourceMappingURL=GetGlobalProductResponseDataSkusSalesAttributes.js.map