"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductRequestBodySkusSalesAttributes = void 0;
class Product202309CreateProductRequestBodySkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309CreateProductRequestBodySkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309CreateProductRequestBodySkusSalesAttributes = Product202309CreateProductRequestBodySkusSalesAttributes;
Product202309CreateProductRequestBodySkusSalesAttributes.discriminator = undefined;
Product202309CreateProductRequestBodySkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309CreateProductRequestBodySkusSalesAttributesSkuImg"
    },
    {
        "name": "supplementarySkuImages",
        "baseName": "supplementary_sku_images",
        "type": "Array<Product202309CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages>"
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
//# sourceMappingURL=CreateProductRequestBodySkusSalesAttributes.js.map