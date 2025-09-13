"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody = void 0;
class DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody {
    static getAttributeTypeMap() {
        return DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody.attributeTypeMap;
    }
}
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody = DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody;
DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody.discriminator = undefined;
DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders>"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIRequestBody.js.map