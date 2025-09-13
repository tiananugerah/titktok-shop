"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductResponseDataSkus = void 0;
class Product202309CreateProductResponseDataSkus {
    static getAttributeTypeMap() {
        return Product202309CreateProductResponseDataSkus.attributeTypeMap;
    }
}
exports.Product202309CreateProductResponseDataSkus = Product202309CreateProductResponseDataSkus;
Product202309CreateProductResponseDataSkus.discriminator = undefined;
Product202309CreateProductResponseDataSkus.attributeTypeMap = [
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
        "type": "Array<Product202309CreateProductResponseDataSkusSalesAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=CreateProductResponseDataSkus.js.map