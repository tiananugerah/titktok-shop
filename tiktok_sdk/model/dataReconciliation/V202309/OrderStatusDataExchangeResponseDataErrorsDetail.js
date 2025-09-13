"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail = void 0;
class DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail {
    static getAttributeTypeMap() {
        return DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail.attributeTypeMap;
    }
}
exports.DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail = DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail;
DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail.discriminator = undefined;
DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail.attributeTypeMap = [
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
        "type": "Array<DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors>"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    }
];
//# sourceMappingURL=OrderStatusDataExchangeResponseDataErrorsDetail.js.map