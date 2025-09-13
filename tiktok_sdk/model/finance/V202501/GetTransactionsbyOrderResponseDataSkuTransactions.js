"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyOrderResponseDataSkuTransactions = void 0;
class Finance202501GetTransactionsbyOrderResponseDataSkuTransactions {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyOrderResponseDataSkuTransactions = Finance202501GetTransactionsbyOrderResponseDataSkuTransactions;
Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.discriminator = undefined;
Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.attributeTypeMap = [
    {
        "name": "feeTaxAmount",
        "baseName": "fee_tax_amount",
        "type": "string"
    },
    {
        "name": "feeTaxBreakdown",
        "baseName": "fee_tax_breakdown",
        "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown"
    },
    {
        "name": "productName",
        "baseName": "product_name",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "string"
    },
    {
        "name": "revenueAmount",
        "baseName": "revenue_amount",
        "type": "string"
    },
    {
        "name": "revenueBreakdown",
        "baseName": "revenue_breakdown",
        "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown"
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
        "name": "shippingCostBreakdown",
        "baseName": "shipping_cost_breakdown",
        "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown"
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    },
    {
        "name": "skuName",
        "baseName": "sku_name",
        "type": "string"
    },
    {
        "name": "statementId",
        "baseName": "statement_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetTransactionsbyOrderResponseDataSkuTransactions.js.map