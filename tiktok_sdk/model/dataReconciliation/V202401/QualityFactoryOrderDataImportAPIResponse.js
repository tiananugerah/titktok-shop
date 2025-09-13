"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIResponse = void 0;
class DataReconciliation202401QualityFactoryOrderDataImportAPIResponse {
    static getAttributeTypeMap() {
        return DataReconciliation202401QualityFactoryOrderDataImportAPIResponse.attributeTypeMap;
    }
}
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIResponse = DataReconciliation202401QualityFactoryOrderDataImportAPIResponse;
DataReconciliation202401QualityFactoryOrderDataImportAPIResponse.discriminator = undefined;
DataReconciliation202401QualityFactoryOrderDataImportAPIResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIResponse.js.map