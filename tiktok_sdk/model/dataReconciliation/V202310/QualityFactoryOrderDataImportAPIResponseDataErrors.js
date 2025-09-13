"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors = void 0;
class DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors {
    static getAttributeTypeMap() {
        return DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors.attributeTypeMap;
    }
}
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors = DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors;
DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors.discriminator = undefined;
DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIResponseDataErrors.js.map