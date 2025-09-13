"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail = void 0;
class DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail {
    static getAttributeTypeMap() {
        return DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.attributeTypeMap;
    }
}
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail = DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail;
DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.discriminator = undefined;
DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.attributeTypeMap = [
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
        "type": "Array<DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors>"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIResponseDataErrorsDetail.js.map