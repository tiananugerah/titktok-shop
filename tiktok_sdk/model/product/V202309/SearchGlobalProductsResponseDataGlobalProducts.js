"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchGlobalProductsResponseDataGlobalProducts = void 0;
class Product202309SearchGlobalProductsResponseDataGlobalProducts {
    static getAttributeTypeMap() {
        return Product202309SearchGlobalProductsResponseDataGlobalProducts.attributeTypeMap;
    }
}
exports.Product202309SearchGlobalProductsResponseDataGlobalProducts = Product202309SearchGlobalProductsResponseDataGlobalProducts;
Product202309SearchGlobalProductsResponseDataGlobalProducts.discriminator = undefined;
Product202309SearchGlobalProductsResponseDataGlobalProducts.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309SearchGlobalProductsResponseDataGlobalProductsSkus>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=SearchGlobalProductsResponseDataGlobalProducts.js.map