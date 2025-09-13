"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetTransactionsbyStatementResponseData = void 0;
class Finance202309GetTransactionsbyStatementResponseData {
    static getAttributeTypeMap() {
        return Finance202309GetTransactionsbyStatementResponseData.attributeTypeMap;
    }
}
exports.Finance202309GetTransactionsbyStatementResponseData = Finance202309GetTransactionsbyStatementResponseData;
Finance202309GetTransactionsbyStatementResponseData.discriminator = undefined;
Finance202309GetTransactionsbyStatementResponseData.attributeTypeMap = [
    {
        "name": "adjustmentAmount",
        "baseName": "adjustment_amount",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "feeAmount",
        "baseName": "fee_amount",
        "type": "string"
    },
    {
        "name": "netSalesAmount",
        "baseName": "net_sales_amount",
        "type": "string"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
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
        "name": "statementId",
        "baseName": "statement_id",
        "type": "string"
    },
    {
        "name": "statementTime",
        "baseName": "statement_time",
        "type": "number"
    },
    {
        "name": "statementTransactions",
        "baseName": "statement_transactions",
        "type": "Array<Finance202309GetTransactionsbyStatementResponseDataStatementTransactions>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetTransactionsbyStatementResponseData.js.map