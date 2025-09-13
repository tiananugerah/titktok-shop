"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalCategoryRulesResponseDataManufacturer = void 0;
class Product202309GetGlobalCategoryRulesResponseDataManufacturer {
    static getAttributeTypeMap() {
        return Product202309GetGlobalCategoryRulesResponseDataManufacturer.attributeTypeMap;
    }
}
exports.Product202309GetGlobalCategoryRulesResponseDataManufacturer = Product202309GetGlobalCategoryRulesResponseDataManufacturer;
Product202309GetGlobalCategoryRulesResponseDataManufacturer.discriminator = undefined;
Product202309GetGlobalCategoryRulesResponseDataManufacturer.attributeTypeMap = [
    {
        "name": "isRequired",
        "baseName": "is_required",
        "type": "boolean"
    },
    {
        "name": "optionalRegions",
        "baseName": "optional_regions",
        "type": "Array<string>"
    },
    {
        "name": "requiredRegions",
        "baseName": "required_regions",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=GetGlobalCategoryRulesResponseDataManufacturer.js.map