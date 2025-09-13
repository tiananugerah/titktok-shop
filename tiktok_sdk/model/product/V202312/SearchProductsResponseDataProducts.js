"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsResponseDataProducts = void 0;
class Product202312SearchProductsResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202312SearchProductsResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202312SearchProductsResponseDataProducts = Product202312SearchProductsResponseDataProducts;
Product202312SearchProductsResponseDataProducts.discriminator = undefined;
Product202312SearchProductsResponseDataProducts.attributeTypeMap = [
    {
        "name": "audit",
        "baseName": "audit",
        "type": "Product202312SearchProductsResponseDataProductsAudit"
    },
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
        "name": "integratedPlatformStatuses",
        "baseName": "integrated_platform_statuses",
        "type": "Array<Product202312SearchProductsResponseDataProductsIntegratedPlatformStatuses>"
    },
    {
        "name": "isNotForSale",
        "baseName": "is_not_for_sale",
        "type": "boolean"
    },
    {
        "name": "listingQualityTier",
        "baseName": "listing_quality_tier",
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
        "type": "Array<Product202312SearchProductsResponseDataProductsRecommendedCategories>"
    },
    {
        "name": "salesRegions",
        "baseName": "sales_regions",
        "type": "Array<string>"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202312SearchProductsResponseDataProductsSkus>"
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