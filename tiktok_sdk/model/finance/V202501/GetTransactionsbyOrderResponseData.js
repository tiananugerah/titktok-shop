"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyOrderResponseData = void 0;
class Finance202501GetTransactionsbyOrderResponseData {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyOrderResponseData.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyOrderResponseData = Finance202501GetTransactionsbyOrderResponseData;
Finance202501GetTransactionsbyOrderResponseData.discriminator = undefined;
Finance202501GetTransactionsbyOrderResponseData.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "feeAndTaxAmount",
        "baseName": "fee_and_tax_amount",
        "type": "string"
    },
    {
        "name": "orderCreateTime",
        "baseName": "order_create_time",
        "type": "number"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "revenueAmount",
        "baseName": "revenue_amount",
        "type": "string"
    },
    {
        "name": "settlementAmount",
        "baseName": "settlement_amount",
        "type": "string"
    },
    {
        "name": "shippingCostAmount",
        "baseName": "shipping_cost_amount",
        "type": "string"
    },
    {
        "name": "skuTransactions",
        "baseName": "sku_transactions",
        "type": "Array<Finance202501GetTransactionsbyOrderResponseDataSkuTransactions>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetTransactionsbyOrderResponseData.js.map