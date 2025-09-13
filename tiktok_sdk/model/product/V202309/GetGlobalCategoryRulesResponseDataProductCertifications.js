"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalCategoryRulesResponseDataProductCertifications = void 0;
class Product202309GetGlobalCategoryRulesResponseDataProductCertifications {
    static getAttributeTypeMap() {
        return Product202309GetGlobalCategoryRulesResponseDataProductCertifications.attributeTypeMap;
    }
}
exports.Product202309GetGlobalCategoryRulesResponseDataProductCertifications = Product202309GetGlobalCategoryRulesResponseDataProductCertifications;
Product202309GetGlobalCategoryRulesResponseDataProductCertifications.discriminator = undefined;
Product202309GetGlobalCategoryRulesResponseDataProductCertifications.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isRequired",
        "baseName": "is_required",
        "type": "boolean"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
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
    },
    {
        "name": "requirementConditions",
        "baseName": "requirement_conditions",
        "type": "Array<Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions>"
    },
    {
        "name": "sampleImageUrl",
        "baseName": "sample_image_url",
        "type": "string"
    }
];
//# sourceMappingURL=GetGlobalCategoryRulesResponseDataProductCertifications.js.map