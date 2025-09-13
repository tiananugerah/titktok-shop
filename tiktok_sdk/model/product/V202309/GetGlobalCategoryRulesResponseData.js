"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalCategoryRulesResponseData = void 0;
class Product202309GetGlobalCategoryRulesResponseData {
    static getAttributeTypeMap() {
        return Product202309GetGlobalCategoryRulesResponseData.attributeTypeMap;
    }
}
exports.Product202309GetGlobalCategoryRulesResponseData = Product202309GetGlobalCategoryRulesResponseData;
Product202309GetGlobalCategoryRulesResponseData.discriminator = undefined;
Product202309GetGlobalCategoryRulesResponseData.attributeTypeMap = [
    {
        "name": "manufacturer",
        "baseName": "manufacturer",
        "type": "Product202309GetGlobalCategoryRulesResponseDataManufacturer"
    },
    {
        "name": "productCertifications",
        "baseName": "product_certifications",
        "type": "Array<Product202309GetGlobalCategoryRulesResponseDataProductCertifications>"
    },
    {
        "name": "responsiblePerson",
        "baseName": "responsible_person",
        "type": "Product202309GetGlobalCategoryRulesResponseDataResponsiblePerson"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309GetGlobalCategoryRulesResponseDataSizeChart"
    }
];
//# sourceMappingURL=GetGlobalCategoryRulesResponseData.js.map