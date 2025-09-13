"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecommendGlobalCategoriesResponseData = void 0;
class Product202309RecommendGlobalCategoriesResponseData {
    static getAttributeTypeMap() {
        return Product202309RecommendGlobalCategoriesResponseData.attributeTypeMap;
    }
}
exports.Product202309RecommendGlobalCategoriesResponseData = Product202309RecommendGlobalCategoriesResponseData;
Product202309RecommendGlobalCategoriesResponseData.discriminator = undefined;
Product202309RecommendGlobalCategoriesResponseData.attributeTypeMap = [
    {
        "name": "categories",
        "baseName": "categories",
        "type": "Array<Product202309RecommendGlobalCategoriesResponseDataCategories>"
    },
    {
        "name": "leafCategoryId",
        "baseName": "leaf_category_id",
        "type": "string"
    }
];
//# sourceMappingURL=RecommendGlobalCategoriesResponseData.js.map