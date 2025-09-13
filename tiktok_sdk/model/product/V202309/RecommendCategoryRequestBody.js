"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecommendCategoryRequestBody = void 0;
class Product202309RecommendCategoryRequestBody {
    static getAttributeTypeMap() {
        return Product202309RecommendCategoryRequestBody.attributeTypeMap;
    }
}
exports.Product202309RecommendCategoryRequestBody = Product202309RecommendCategoryRequestBody;
Product202309RecommendCategoryRequestBody.discriminator = undefined;
Product202309RecommendCategoryRequestBody.attributeTypeMap = [
    {
        "name": "categoryVersion",
        "baseName": "category_version",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309RecommendCategoryRequestBodyImages>"
    },
    {
        "name": "includeProhibitedCategories",
        "baseName": "include_prohibited_categories",
        "type": "boolean"
    },
    {
        "name": "listingPlatform",
        "baseName": "listing_platform",
        "type": "string"
    },
    {
        "name": "productTitle",
        "baseName": "product_title",
        "type": "string"
    }
];
//# sourceMappingURL=RecommendCategoryRequestBody.js.map