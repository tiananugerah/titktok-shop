"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductRequestBodySkusSalesAttributes = void 0;
class Product202309EditGlobalProductRequestBodySkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductRequestBodySkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductRequestBodySkusSalesAttributes = Product202309EditGlobalProductRequestBodySkusSalesAttributes;
Product202309EditGlobalProductRequestBodySkusSalesAttributes.discriminator = undefined;
Product202309EditGlobalProductRequestBodySkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309EditGlobalProductRequestBodySkusSalesAttributesSkuImg"
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
//# sourceMappingURL=EditGlobalProductRequestBodySkusSalesAttributes.js.map