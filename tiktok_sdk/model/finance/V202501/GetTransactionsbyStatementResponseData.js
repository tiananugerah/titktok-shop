"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyStatementResponseData = void 0;
class Finance202501GetTransactionsbyStatementResponseData {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyStatementResponseData.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyStatementResponseData = Finance202501GetTransactionsbyStatementResponseData;
Finance202501GetTransactionsbyStatementResponseData.discriminator = undefined;
Finance202501GetTransactionsbyStatementResponseData.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "payableAmount",
        "baseName": "payable_amount",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    },
    {
        "name": "totalReserveAmount",
        "baseName": "total_reserve_amount",
        "type": "string"
    },
    {
        "name": "totalSettlementAmount",
        "baseName": "total_settlement_amount",
        "type": "string"
    },
    {
        "name": "totalSettlementBreakdown",
        "baseName": "total_settlement_breakdown",
        "type": "Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown"
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Finance202501GetTransactionsbyStatementResponseDataTransactions>"
    }
];
//# sourceMappingURL=GetTransactionsbyStatementResponseData.js.map