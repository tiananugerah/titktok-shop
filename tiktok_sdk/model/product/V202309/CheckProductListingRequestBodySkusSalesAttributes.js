"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBodySkusSalesAttributes = void 0;
class Product202309CheckProductListingRequestBodySkusSalesAttributes {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBodySkusSalesAttributes.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBodySkusSalesAttributes = Product202309CheckProductListingRequestBodySkusSalesAttributes;
Product202309CheckProductListingRequestBodySkusSalesAttributes.discriminator = undefined;
Product202309CheckProductListingRequestBodySkusSalesAttributes.attributeTypeMap = [
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
        "type": "Product202309CheckProductListingRequestBodySkusSalesAttributesSkuImg"
    },
    {
        "name": "supplementarySkuImages",
        "baseName": "supplementary_sku_images",
        "type": "Array<Product202309CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages>"
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
//# sourceMappingURL=CheckProductListingRequestBodySkusSalesAttributes.js.map