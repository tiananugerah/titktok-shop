"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PublishGlobalProductResponseDataProducts = void 0;
class Product202309PublishGlobalProductResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202309PublishGlobalProductResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202309PublishGlobalProductResponseDataProducts = Product202309PublishGlobalProductResponseDataProducts;
Product202309PublishGlobalProductResponseDataProducts.discriminator = undefined;
Product202309PublishGlobalProductResponseDataProducts.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "shopId",
        "baseName": "shop_id",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309PublishGlobalProductResponseDataProductsSkus>"
    }
];
//# sourceMappingURL=PublishGlobalProductResponseDataProducts.js.map