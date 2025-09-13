"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders = void 0;
class DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders {
    static getAttributeTypeMap() {
        return DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders.attributeTypeMap;
    }
}
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders = DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders;
DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders.discriminator = undefined;
DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders.attributeTypeMap = [
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
        "name": "issueReason",
        "baseName": "issue_reason",
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
        "type": "Array<DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages>"
    }
];
//# sourceMappingURL=QualityFactoryOrderDataImportAPIRequestBodyOrders.js.map