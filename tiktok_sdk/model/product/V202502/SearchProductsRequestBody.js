"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsRequestBody = void 0;
class Product202502SearchProductsRequestBody {
    static getAttributeTypeMap() {
        return Product202502SearchProductsRequestBody.attributeTypeMap;
    }
}
exports.Product202502SearchProductsRequestBody = Product202502SearchProductsRequestBody;
Product202502SearchProductsRequestBody.discriminator = undefined;
Product202502SearchProductsRequestBody.attributeTypeMap = [
    {
        "name": "auditStatus",
        "baseName": "audit_status",
        "type": "Array<string>"
    },
    {
        "name": "categoryVersion",
        "baseName": "category_version",
        "type": "string"
    },
    {
        "name": "createTimeGe",
        "baseName": "create_time_ge",
        "type": "number"
    },
    {
        "name": "createTimeLe",
        "baseName": "create_time_le",
        "type": "number"
    },
    {
        "name": "listingPlatforms",
        "baseName": "listing_platforms",
        "type": "Array<string>"
    },
    {
        "name": "listingQualityTiers",
        "baseName": "listing_quality_tiers",
        "type": "Array<string>"
    },
    {
        "name": "returnDraftVersion",
        "baseName": "return_draft_version",
        "type": "boolean"
    },
    {
        "name": "sellerSkus",
        "baseName": "seller_skus",
        "type": "Array<string>"
    },
    {
        "name": "skuIds",
        "baseName": "sku_ids",
        "type": "Array<string>"
    },
    {
        "name": "snsFilter",
        "baseName": "sns_filter",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "updateTimeGe",
        "baseName": "update_time_ge",
        "type": "number"
    },
    {
        "name": "updateTimeLe",
        "baseName": "update_time_le",
        "type": "number"
    }
];
//# sourceMappingURL=SearchProductsRequestBody.js.map