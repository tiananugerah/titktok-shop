"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets = void 0;
class Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets {
    static getAttributeTypeMap() {
        return Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets.attributeTypeMap;
    }
}
exports.Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets = Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets;
Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets.discriminator = undefined;
Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssets.attributeTypeMap = [
    {
        "name": "category",
        "baseName": "category",
        "type": "Authorization202405GetAuthorizedCategoryAssetsResponseDataCategoryAssetsCategory"
    },
    {
        "name": "cipher",
        "baseName": "cipher",
        "type": "string"
    },
    {
        "name": "targetMarket",
        "baseName": "target_market",
        "type": "string"
    }
];
//# sourceMappingURL=GetAuthorizedCategoryAssetsResponseDataCategoryAssets.js.map