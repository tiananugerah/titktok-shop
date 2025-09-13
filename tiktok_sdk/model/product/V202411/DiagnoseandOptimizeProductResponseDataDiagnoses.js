"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202411DiagnoseandOptimizeProductResponseDataDiagnoses = void 0;
class Product202411DiagnoseandOptimizeProductResponseDataDiagnoses {
    static getAttributeTypeMap() {
        return Product202411DiagnoseandOptimizeProductResponseDataDiagnoses.attributeTypeMap;
    }
}
exports.Product202411DiagnoseandOptimizeProductResponseDataDiagnoses = Product202411DiagnoseandOptimizeProductResponseDataDiagnoses;
Product202411DiagnoseandOptimizeProductResponseDataDiagnoses.discriminator = undefined;
Product202411DiagnoseandOptimizeProductResponseDataDiagnoses.attributeTypeMap = [
    {
        "name": "diagnosisResults",
        "baseName": "diagnosis_results",
        "type": "Array<Product202411DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults>"
    },
    {
        "name": "field",
        "baseName": "field",
        "type": "string"
    },
    {
        "name": "suggestion",
        "baseName": "suggestion",
        "type": "Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion"
    }
];
//# sourceMappingURL=DiagnoseandOptimizeProductResponseDataDiagnoses.js.map