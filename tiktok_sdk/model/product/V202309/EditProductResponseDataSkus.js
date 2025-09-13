"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductResponseDataSkus = void 0;
class Product202309EditProductResponseDataSkus {
    static getAttributeTypeMap() {
        return Product202309EditProductResponseDataSkus.attributeTypeMap;
    }
}
exports.Product202309EditProductResponseDataSkus = Product202309EditProductResponseDataSkus;
Product202309EditProductResponseDataSkus.discriminator = undefined;
Product202309EditProductResponseDataSkus.attributeTypeMap = [
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
        "type": "Array<Product202309EditProductResponseDataSkusSalesAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=EditProductResponseDataSkus.js.map