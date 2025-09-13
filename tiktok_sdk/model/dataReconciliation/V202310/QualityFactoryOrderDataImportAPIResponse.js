"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIResponse = void 0;
class DataReconciliation202310QualityFactoryOrderDataImportAPIResponse {
    static getAttributeTypeMap() {
        return DataReconciliation202310QualityFactoryOrderDataImportAPIResponse.attributeTypeMap;
    }
}
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIResponse = DataReconciliation202310QualityFactoryOrderDataImportAPIResponse;
DataReconciliation202310QualityFactoryOrderDataImportAPIResponse.discriminator = undefined;
DataReconciliation202310QualityFactoryOrderDataImportAPIResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseData"
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