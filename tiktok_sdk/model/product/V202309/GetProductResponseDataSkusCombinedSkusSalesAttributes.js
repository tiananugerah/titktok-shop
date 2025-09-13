"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes = void 0;
class Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes = Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes;
Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes.discriminator = undefined;
Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg"
    },
    {
        "name": "supplementarySkuImages",
        "baseName": "supplementary_sku_images",
        "type": "Array<Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages>"
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
//# sourceMappingURL=GetProductResponseDataSkusCombinedSkusSalesAttributes.js.map