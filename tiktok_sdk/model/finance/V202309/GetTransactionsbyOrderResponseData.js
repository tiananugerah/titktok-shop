"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetTransactionsbyOrderResponseData = void 0;
class Finance202309GetTransactionsbyOrderResponseData {
    static getAttributeTypeMap() {
        return Finance202309GetTransactionsbyOrderResponseData.attributeTypeMap;
    }
}
exports.Finance202309GetTransactionsbyOrderResponseData = Finance202309GetTransactionsbyOrderResponseData;
Finance202309GetTransactionsbyOrderResponseData.discriminator = undefined;
Finance202309GetTransactionsbyOrderResponseData.attributeTypeMap = [
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
        "name": "statementTransactions",
        "baseName": "statement_transactions",
        "type": "Array<Finance202309GetTransactionsbyOrderResponseDataStatementTransactions>"
    }
];
//# sourceMappingURL=GetTransactionsbyOrderResponseData.js.map