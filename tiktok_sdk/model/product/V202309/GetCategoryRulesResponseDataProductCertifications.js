"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetCategoryRulesResponseDataProductCertifications = void 0;
class Product202309GetCategoryRulesResponseDataProductCertifications {
    static getAttributeTypeMap() {
        return Product202309GetCategoryRulesResponseDataProductCertifications.attributeTypeMap;
    }
}
exports.Product202309GetCategoryRulesResponseDataProductCertifications = Product202309GetCategoryRulesResponseDataProductCertifications;
Product202309GetCategoryRulesResponseDataProductCertifications.discriminator = undefined;
Product202309GetCategoryRulesResponseDataProductCertifications.attributeTypeMap = [
    {
        "name": "documentDetails",
        "baseName": "document_details",
        "type": "string"
    },
    {
        "name": "expirationDate",
        "baseName": "expiration_date",
        "type": "Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate"
    },
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
        "name": "requirementConditions",
        "baseName": "requirement_conditions",
        "type": "Array<Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions>"
    },
    {
        "name": "sampleImageUrl",
        "baseName": "sample_image_url",
        "type": "string"
    }
];
//# sourceMappingURL=GetCategoryRulesResponseDataProductCertifications.js.map