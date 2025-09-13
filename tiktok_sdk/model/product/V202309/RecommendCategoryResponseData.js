"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecommendCategoryResponseData = void 0;
class Product202309RecommendCategoryResponseData {
    static getAttributeTypeMap() {
        return Product202309RecommendCategoryResponseData.attributeTypeMap;
    }
}
exports.Product202309RecommendCategoryResponseData = Product202309RecommendCategoryResponseData;
Product202309RecommendCategoryResponseData.discriminator = undefined;
Product202309RecommendCategoryResponseData.attributeTypeMap = [
    {
        "name": "categories",
        "baseName": "categories",
        "type": "Array<Product202309RecommendCategoryResponseDataCategories>"
    },
    {
        "name": "leafCategoryId",
        "baseName": "leaf_category_id",
        "type": "string"
    }
];
//# sourceMappingURL=RecommendCategoryResponseData.js.map