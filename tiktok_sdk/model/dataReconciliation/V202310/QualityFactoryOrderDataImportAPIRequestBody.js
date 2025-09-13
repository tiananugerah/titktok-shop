"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody = void 0;
class DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody {
    static getAttributeTypeMap() {
        return DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody.attributeTypeMap;
    }
}
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody = DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody;
DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody.discriminator = undefined;
DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders>"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIRequestBody.js.map