"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductResponseDataSkus = void 0;
class Product202309PartialEditProductResponseDataSkus {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductResponseDataSkus.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductResponseDataSkus = Product202309PartialEditProductResponseDataSkus;
Product202309PartialEditProductResponseDataSkus.discriminator = undefined;
Product202309PartialEditProductResponseDataSkus.attributeTypeMap = [
    {
        "name": "externalSkuId",
        "baseName": "external_sku_id",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309PartialEditProductResponseDataSkusSalesAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=PartialEditProductResponseDataSkus.js.map