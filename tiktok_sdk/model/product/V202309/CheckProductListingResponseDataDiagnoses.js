"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingResponseDataDiagnoses = void 0;
class Product202309CheckProductListingResponseDataDiagnoses {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingResponseDataDiagnoses.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingResponseDataDiagnoses = Product202309CheckProductListingResponseDataDiagnoses;
Product202309CheckProductListingResponseDataDiagnoses.discriminator = undefined;
Product202309CheckProductListingResponseDataDiagnoses.attributeTypeMap = [
    {
        "name": "diagnosisResults",
        "baseName": "diagnosis_results",
        "type": "Array<Product202309CheckProductListingResponseDataDiagnosesDiagnosisResults>"
    },
    {
        "name": "field",
        "baseName": "field",
        "type": "string"
    },
    {
        "name": "suggestions",
        "baseName": "suggestions",
        "type": "Product202309CheckProductListingResponseDataDiagnosesSuggestions"
    }
];
//# sourceMappingURL=CheckProductListingResponseDataDiagnoses.js.map