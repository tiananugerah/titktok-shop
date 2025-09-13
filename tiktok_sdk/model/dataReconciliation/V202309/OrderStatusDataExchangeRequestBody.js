"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202309OrderStatusDataExchangeRequestBody = void 0;
class DataReconciliation202309OrderStatusDataExchangeRequestBody {
    static getAttributeTypeMap() {
        return DataReconciliation202309OrderStatusDataExchangeRequestBody.attributeTypeMap;
    }
}
exports.DataReconciliation202309OrderStatusDataExchangeRequestBody = DataReconciliation202309OrderStatusDataExchangeRequestBody;
DataReconciliation202309OrderStatusDataExchangeRequestBody.discriminator = undefined;
DataReconciliation202309OrderStatusDataExchangeRequestBody.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders>"
    }
];
//# sourceMappingURL=OrderStatusDataExchangeRequestBody.js.map