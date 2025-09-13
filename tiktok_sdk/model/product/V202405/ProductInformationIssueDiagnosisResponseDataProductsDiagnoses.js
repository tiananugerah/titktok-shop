"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses = void 0;
class Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses {
    static getAttributeTypeMap() {
        return Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses.attributeTypeMap;
    }
}
exports.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses = Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses;
Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses.discriminator = undefined;
Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses.attributeTypeMap = [
    {
        "name": "diagnosisResults",
        "baseName": "diagnosis_results",
        "type": "Array<Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults>"
    },
    {
        "name": "field",
        "baseName": "field",
        "type": "string"
    },
    {
        "name": "suggestion",
        "baseName": "suggestion",
        "type": "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion"
    }
];
//# sourceMappingURL=ProductInformationIssueDiagnosisResponseDataProductsDiagnoses.js.map