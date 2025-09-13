"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsRequestBody = void 0;
class Product202312SearchProductsRequestBody {
    static getAttributeTypeMap() {
        return Product202312SearchProductsRequestBody.attributeTypeMap;
    }
}
exports.Product202312SearchProductsRequestBody = Product202312SearchProductsRequestBody;
Product202312SearchProductsRequestBody.discriminator = undefined;
Product202312SearchProductsRequestBody.attributeTypeMap = [
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
        "name": "listingQualityTier",
        "baseName": "listing_quality_tier",
        "type": "string"
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