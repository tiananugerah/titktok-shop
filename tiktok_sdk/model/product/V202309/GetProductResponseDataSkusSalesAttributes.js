"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkusSalesAttributes = void 0;
class Product202309GetProductResponseDataSkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkusSalesAttributes = Product202309GetProductResponseDataSkusSalesAttributes;
Product202309GetProductResponseDataSkusSalesAttributes.discriminator = undefined;
Product202309GetProductResponseDataSkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309GetProductResponseDataSkusSalesAttributesSkuImg"
    },
    {
        "name": "supplementarySkuImages",
        "baseName": "supplementary_sku_images",
        "type": "Array<Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages>"
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
//# sourceMappingURL=GetProductResponseDataSkusSalesAttributes.js.map