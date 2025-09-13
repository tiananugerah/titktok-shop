"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalCategoriesResponseDataCategories = void 0;
class Product202309GetGlobalCategoriesResponseDataCategories {
    static getAttributeTypeMap() {
        return Product202309GetGlobalCategoriesResponseDataCategories.attributeTypeMap;
    }
}
exports.Product202309GetGlobalCategoriesResponseDataCategories = Product202309GetGlobalCategoriesResponseDataCategories;
Product202309GetGlobalCategoriesResponseDataCategories.discriminator = undefined;
Product202309GetGlobalCategoriesResponseDataCategories.attributeTypeMap = [
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
        "name": "localName",
        "baseName": "local_name",
        "type": "string"
    },
    {
        "name": "parentId",
        "baseName": "parent_id",
        "type": "string"
    },
    {
        "name": "permissionStatuses",
        "baseName": "permission_statuses",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=GetGlobalCategoriesResponseDataCategories.js.map