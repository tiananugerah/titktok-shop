"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponseDataProducts = void 0;
class Product202502SearchProductsResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponseDataProducts = Product202502SearchProductsResponseDataProducts;
Product202502SearchProductsResponseDataProducts.discriminator = undefined;
Product202502SearchProductsResponseDataProducts.attributeTypeMap = [
    {
        "name": "audit",
        "baseName": "audit",
        "type": "Product202502SearchProductsResponseDataProductsAudit"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "hasDraft",
        "baseName": "has_draft",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "integratedPlatformStatuses",
        "baseName": "integrated_platform_statuses",
        "type": "Array<Product202502SearchProductsResponseDataProductsIntegratedPlatformStatuses>"
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
        "name": "productFamilies",
        "baseName": "product_families",
        "type": "Array<Product202502SearchProductsResponseDataProductsProductFamilies>"
    },
    {
        "name": "productSyncFailReasons",
        "baseName": "product_sync_fail_reasons",
        "type": "Array<string>"
    },
    {
        "name": "recommendedCategories",
        "baseName": "recommended_categories",
        "type": "Array<Product202502SearchProductsResponseDataProductsRecommendedCategories>"
    },
    {
        "name": "salesRegions",
        "baseName": "sales_regions",
        "type": "Array<string>"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202502SearchProductsResponseDataProductsSkus>"
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