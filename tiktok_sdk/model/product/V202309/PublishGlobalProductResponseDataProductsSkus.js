"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PublishGlobalProductResponseDataProductsSkus = void 0;
class Product202309PublishGlobalProductResponseDataProductsSkus {
    static getAttributeTypeMap() {
        return Product202309PublishGlobalProductResponseDataProductsSkus.attributeTypeMap;
    }
}
exports.Product202309PublishGlobalProductResponseDataProductsSkus = Product202309PublishGlobalProductResponseDataProductsSkus;
Product202309PublishGlobalProductResponseDataProductsSkus.discriminator = undefined;
Product202309PublishGlobalProductResponseDataProductsSkus.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "relatedGlobalSkuId",
        "baseName": "related_global_sku_id",
        "type": "string"
    },
    {
        "name": "saleAttributes",
        "baseName": "sale_attributes",
        "type": "Array<Product202309PublishGlobalProductResponseDataProductsSkusSaleAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=PublishGlobalProductResponseDataProductsSkus.js.map