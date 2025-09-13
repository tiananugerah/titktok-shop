"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202507GetUnsettledTransactionsResponseData = void 0;
class Finance202507GetUnsettledTransactionsResponseData {
    static getAttributeTypeMap() {
        return Finance202507GetUnsettledTransactionsResponseData.attributeTypeMap;
    }
}
exports.Finance202507GetUnsettledTransactionsResponseData = Finance202507GetUnsettledTransactionsResponseData;
Finance202507GetUnsettledTransactionsResponseData.discriminator = undefined;
Finance202507GetUnsettledTransactionsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "sumEstAdjustmentAmount",
        "baseName": "sum_est_adjustment_amount",
        "type": "string"
    },
    {
        "name": "sumEstFeeAmount",
        "baseName": "sum_est_fee_amount",
        "type": "string"
    },
    {
        "name": "sumEstRevenueAmount",
        "baseName": "sum_est_revenue_amount",
        "type": "string"
    },
    {
        "name": "sumEstSettlementAmount",
        "baseName": "sum_est_settlement_amount",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Finance202507GetUnsettledTransactionsResponseDataTransactions>"
    }
];
//# sourceMappingURL=GetUnsettledTransactionsResponseData.js.map