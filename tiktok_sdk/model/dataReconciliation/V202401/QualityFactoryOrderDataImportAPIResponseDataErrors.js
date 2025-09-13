"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors = void 0;
class DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors {
    static getAttributeTypeMap() {
        return DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors.attributeTypeMap;
    }
}
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors = DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors;
DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors.discriminator = undefined;
DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIResponseDataErrors.js.map