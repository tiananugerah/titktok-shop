"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchProductsResponseDataProducts = void 0;
class Product202309SearchProductsResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202309SearchProductsResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202309SearchProductsResponseDataProducts = Product202309SearchProductsResponseDataProducts;
Product202309SearchProductsResponseDataProducts.discriminator = undefined;
Product202309SearchProductsResponseDataProducts.attributeTypeMap = [
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
        "name": "productSyncFailReasons",
        "baseName": "product_sync_fail_reasons",
        "type": "Array<string>"
    },
    {
        "name": "recommendedCategories",
        "baseName": "recommended_categories",
        "type": "Array<Product202309SearchProductsResponseDataProductsRecommendedCategories>"
    },
    {
        "name": "salesRegions",
        "baseName": "sales_regions",
        "type": "Array<string>"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309SearchProductsResponseDataProductsSkus>"
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
//# sourceMappingURL=SearchProductsResponseDataProducts.js.map