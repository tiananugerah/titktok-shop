"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecommendCategoryResponseDataCategories = void 0;
class Product202309RecommendCategoryResponseDataCategories {
    static getAttributeTypeMap() {
        return Product202309RecommendCategoryResponseDataCategories.attributeTypeMap;
    }
}
exports.Product202309RecommendCategoryResponseDataCategories = Product202309RecommendCategoryResponseDataCategories;
Product202309RecommendCategoryResponseDataCategories.discriminator = undefined;
Product202309RecommendCategoryResponseDataCategories.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isLeaf",
        "baseName": "is_leaf",
        "type": "boolean"
    },
    {
        "name": "level",
        "baseName": "level",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "permissionStatuses",
        "baseName": "permission_statuses",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=RecommendCategoryResponseDataCategories.js.map