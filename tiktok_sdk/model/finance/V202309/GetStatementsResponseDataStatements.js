"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetStatementsResponseDataStatements = void 0;
class Finance202309GetStatementsResponseDataStatements {
    static getAttributeTypeMap() {
        return Finance202309GetStatementsResponseDataStatements.attributeTypeMap;
    }
}
exports.Finance202309GetStatementsResponseDataStatements = Finance202309GetStatementsResponseDataStatements;
Finance202309GetStatementsResponseDataStatements.discriminator = undefined;
Finance202309GetStatementsResponseDataStatements.attributeTypeMap = [
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
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "netSalesAmount",
        "baseName": "net_sales_amount",
        "type": "string"
    },
    {
        "name": "paymentId",
        "baseName": "payment_id",
        "type": "string"
    },
    {
        "name": "paymentStatus",
        "baseName": "payment_status",
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
        "name": "statementTime",
        "baseName": "statement_time",
        "type": "number"
    }
];
//# sourceMappingURL=GetStatementsResponseDataStatements.js.map