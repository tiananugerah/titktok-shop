"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders = void 0;
class DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders {
    static getAttributeTypeMap() {
        return DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders.attributeTypeMap;
    }
}
exports.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders = DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders;
DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders.discriminator = undefined;
DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders.attributeTypeMap = [
    {
        "name": "channelFinancialStatus",
        "baseName": "channel_financial_status",
        "type": "string"
    },
    {
        "name": "channelFulfillmentStatus",
        "baseName": "channel_fulfillment_status",
        "type": "string"
    },
    {
        "name": "channelOrderId",
        "baseName": "channel_order_id",
        "type": "string"
    },
    {
        "name": "channelOrderStatus",
        "baseName": "channel_order_status",
        "type": "string"
    },
    {
        "name": "channelOrderUpdateTime",
        "baseName": "channel_order_update_time",
        "type": "string"
    },
    {
        "name": "channelType",
        "baseName": "channel_type",
        "type": "string"
    },
    {
        "name": "notExistReason",
        "baseName": "not_exist_reason",
        "type": "string"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages>"
    }
];
//# sourceMappingURL=OrderStatusDataExchangeRequestBodyOrders.js.map