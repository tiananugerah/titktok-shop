"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductRequestBodySkusSalesAttributes = void 0;
class Product202309CreateGlobalProductRequestBodySkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductRequestBodySkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductRequestBodySkusSalesAttributes = Product202309CreateGlobalProductRequestBodySkusSalesAttributes;
Product202309CreateGlobalProductRequestBodySkusSalesAttributes.discriminator = undefined;
Product202309CreateGlobalProductRequestBodySkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309CreateGlobalProductRequestBodySkusSalesAttributesSkuImg"
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
//# sourceMappingURL=CreateGlobalProductRequestBodySkusSalesAttributes.js.map