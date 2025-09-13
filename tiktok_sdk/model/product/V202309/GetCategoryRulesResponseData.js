"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetCategoryRulesResponseData = void 0;
class Product202309GetCategoryRulesResponseData {
    static getAttributeTypeMap() {
        return Product202309GetCategoryRulesResponseData.attributeTypeMap;
    }
}
exports.Product202309GetCategoryRulesResponseData = Product202309GetCategoryRulesResponseData;
Product202309GetCategoryRulesResponseData.discriminator = undefined;
Product202309GetCategoryRulesResponseData.attributeTypeMap = [
    {
        "name": "allowedSpecialProductTypes",
        "baseName": "allowed_special_product_types",
        "type": "Array<string>"
    },
    {
        "name": "cod",
        "baseName": "cod",
        "type": "Product202309GetCategoryRulesResponseDataCod"
    },
    {
        "name": "epr",
        "baseName": "epr",
        "type": "Product202309GetCategoryRulesResponseDataEpr"
    },
    {
        "name": "manufacturer",
        "baseName": "manufacturer",
        "type": "Product202309GetCategoryRulesResponseDataManufacturer"
    },
    {
        "name": "packageDimension",
        "baseName": "package_dimension",
        "type": "Product202309GetCategoryRulesResponseDataPackageDimension"
    },
    {
        "name": "productCertifications",
        "baseName": "product_certifications",
        "type": "Array<Product202309GetCategoryRulesResponseDataProductCertifications>"
    },
    {
        "name": "responsiblePerson",
        "baseName": "responsible_person",
        "type": "Product202309GetCategoryRulesResponseDataResponsiblePerson"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309GetCategoryRulesResponseDataSizeChart"
    }
];
//# sourceMappingURL=GetCategoryRulesResponseData.js.map