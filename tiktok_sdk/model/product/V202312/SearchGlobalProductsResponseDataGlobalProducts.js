"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchGlobalProductsResponseDataGlobalProducts = void 0;
class Product202312SearchGlobalProductsResponseDataGlobalProducts {
    static getAttributeTypeMap() {
        return Product202312SearchGlobalProductsResponseDataGlobalProducts.attributeTypeMap;
    }
}
exports.Product202312SearchGlobalProductsResponseDataGlobalProducts = Product202312SearchGlobalProductsResponseDataGlobalProducts;
Product202312SearchGlobalProductsResponseDataGlobalProducts.discriminator = undefined;
Product202312SearchGlobalProductsResponseDataGlobalProducts.attributeTypeMap = [
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
        "type": "Array<Product202312SearchGlobalProductsResponseDataGlobalProductsSkus>"
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