"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetCategoriesResponseDataCategories = void 0;
class Product202309GetCategoriesResponseDataCategories {
    static getAttributeTypeMap() {
        return Product202309GetCategoriesResponseDataCategories.attributeTypeMap;
    }
}
exports.Product202309GetCategoriesResponseDataCategories = Product202309GetCategoriesResponseDataCategories;
Product202309GetCategoriesResponseDataCategories.discriminator = undefined;
Product202309GetCategoriesResponseDataCategories.attributeTypeMap = [
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
//# sourceMappingURL=GetCategoriesResponseDataCategories.js.map