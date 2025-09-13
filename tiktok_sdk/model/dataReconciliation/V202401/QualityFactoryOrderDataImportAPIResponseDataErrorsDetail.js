"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail = void 0;
class DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail {
    static getAttributeTypeMap() {
        return DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.attributeTypeMap;
    }
}
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail = DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail;
DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.discriminator = undefined;
DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.attributeTypeMap = [
    {
        "name": "channelOrderId",
        "baseName": "channel_order_id",
        "type": "string"
    },
    {
        "name": "channelType",
        "baseName": "channel_type",
        "type": "string"
    },
    {
        "name": "extraErrors",
        "baseName": "extra_errors",
        "type": "Array<DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors>"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.js.map