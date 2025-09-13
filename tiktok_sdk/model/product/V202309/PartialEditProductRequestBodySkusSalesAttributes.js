"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodySkusSalesAttributes = void 0;
class Product202309PartialEditProductRequestBodySkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodySkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodySkusSalesAttributes = Product202309PartialEditProductRequestBodySkusSalesAttributes;
Product202309PartialEditProductRequestBodySkusSalesAttributes.discriminator = undefined;
Product202309PartialEditProductRequestBodySkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309PartialEditProductRequestBodySkusSalesAttributesSkuImg"
    },
    {
        "name": "supplementarySkuImages",
        "baseName": "supplementary_sku_images",
        "type": "Array<Product202309PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages>"
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
//# sourceMappingURL=PartialEditProductRequestBodySkusSalesAttributes.js.map