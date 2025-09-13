"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders = void 0;
class DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders {
    static getAttributeTypeMap() {
        return DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders.attributeTypeMap;
    }
}
exports.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders = DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders;
DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders.discriminator = undefined;
DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders.attributeTypeMap = [
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
        "type": "Array<DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages>"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIRequestBodyOrders.js.map