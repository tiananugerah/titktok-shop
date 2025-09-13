"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecommendGlobalCategoriesRequestBody = void 0;
class Product202309RecommendGlobalCategoriesRequestBody {
    static getAttributeTypeMap() {
        return Product202309RecommendGlobalCategoriesRequestBody.attributeTypeMap;
    }
}
exports.Product202309RecommendGlobalCategoriesRequestBody = Product202309RecommendGlobalCategoriesRequestBody;
Product202309RecommendGlobalCategoriesRequestBody.discriminator = undefined;
Product202309RecommendGlobalCategoriesRequestBody.attributeTypeMap = [
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
        "type": "Array<Product202309RecommendGlobalCategoriesRequestBodyImages>"
    },
    {
        "name": "productTitle",
        "baseName": "product_title",
        "type": "string"
    }
];
//# sourceMappingURL=RecommendGlobalCategoriesRequestBody.js.map