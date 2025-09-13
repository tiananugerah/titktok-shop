"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202309OrderStatusDataExchangeResponse = void 0;
class DataReconciliation202309OrderStatusDataExchangeResponse {
    static getAttributeTypeMap() {
        return DataReconciliation202309OrderStatusDataExchangeResponse.attributeTypeMap;
    }
}
exports.DataReconciliation202309OrderStatusDataExchangeResponse = DataReconciliation202309OrderStatusDataExchangeResponse;
DataReconciliation202309OrderStatusDataExchangeResponse.discriminator = undefined;
DataReconciliation202309OrderStatusDataExchangeResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "DataReconciliation202309OrderStatusDataExchangeResponseData"
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
//# sourceMappingURL=OrderStatusDataExchangeResponse.js.map