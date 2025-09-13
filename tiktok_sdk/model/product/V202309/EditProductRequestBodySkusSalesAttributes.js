"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBodySkusSalesAttributes = void 0;
class Product202309EditProductRequestBodySkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBodySkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBodySkusSalesAttributes = Product202309EditProductRequestBodySkusSalesAttributes;
Product202309EditProductRequestBodySkusSalesAttributes.discriminator = undefined;
Product202309EditProductRequestBodySkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309EditProductRequestBodySkusSalesAttributesSkuImg"
    },
    {
        "name": "supplementarySkuImages",
        "baseName": "supplementary_sku_images",
        "type": "Array<Product202309EditProductRequestBodySkusSalesAttributesSupplementarySkuImages>"
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
//# sourceMappingURL=EditProductRequestBodySkusSalesAttributes.js.map