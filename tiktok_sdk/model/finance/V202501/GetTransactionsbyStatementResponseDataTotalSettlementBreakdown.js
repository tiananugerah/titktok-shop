"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown = void 0;
class Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown = Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown;
Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown.discriminator = undefined;
Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown.attributeTypeMap = [
    {
        "name": "totalAdjustmentAmount",
        "baseName": "total_adjustment_amount",
        "type": "string"
    },
    {
        "name": "totalFeeTaxAmount",
        "baseName": "total_fee_tax_amount",
        "type": "string"
    },
    {
        "name": "totalRevenueAmount",
        "baseName": "total_revenue_amount",
        "type": "string"
    },
    {
        "name": "totalShippingCostAmount",
        "baseName": "total_shipping_cost_amount",
        "type": "string"
    }
];
//# sourceMappingURL=GetTransactionsbyStatementResponseDataTotalSettlementBreakdown.js.map