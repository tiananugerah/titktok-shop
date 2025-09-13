"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202507GetUnsettledTransactionsResponseDataTransactions = void 0;
class Finance202507GetUnsettledTransactionsResponseDataTransactions {
    static getAttributeTypeMap() {
        return Finance202507GetUnsettledTransactionsResponseDataTransactions.attributeTypeMap;
    }
}
exports.Finance202507GetUnsettledTransactionsResponseDataTransactions = Finance202507GetUnsettledTransactionsResponseDataTransactions;
Finance202507GetUnsettledTransactionsResponseDataTransactions.discriminator = undefined;
Finance202507GetUnsettledTransactionsResponseDataTransactions.attributeTypeMap = [
    {
        "name": "adjustmentId",
        "baseName": "adjustment_id",
        "type": "string"
    },
    {
        "name": "adjustmentOrderId",
        "baseName": "adjustment_order_id",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "estAdjustmentAmount",
        "baseName": "est_adjustment_amount",
        "type": "string"
    },
    {
        "name": "estFeeTaxAmount",
        "baseName": "est_fee_tax_amount",
        "type": "string"
    },
    {
        "name": "estRevenueAmount",
        "baseName": "est_revenue_amount",
        "type": "string"
    },
    {
        "name": "estSettlementAmount",
        "baseName": "est_settlement_amount",
        "type": "string"
    },
    {
        "name": "estShippingCostAmount",
        "baseName": "est_shipping_cost_amount",
        "type": "string"
    },
    {
        "name": "estimatedSettlement",
        "baseName": "estimated_settlement",
        "type": "string"
    },
    {
        "name": "feeTaxBreakdown",
        "baseName": "fee_tax_breakdown",
        "type": "Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "orderCreateTime",
        "baseName": "order_create_time",
        "type": "number"
    },
    {
        "name": "orderDeliveryTime",
        "baseName": "order_delivery_time",
        "type": "number"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "revenueBreakdown",
        "baseName": "revenue_breakdown",
        "type": "Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown"
    },
    {
        "name": "shippingCostBreakdown",
        "baseName": "shipping_cost_breakdown",
        "type": "Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "unsettledReason",
        "baseName": "unsettled_reason",
        "type": "string"
    }
];
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactions.js.map