"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown = void 0;
class Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown = Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown;
Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown.discriminator = undefined;
Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown.attributeTypeMap = [
    {
        "name": "fee",
        "baseName": "fee",
        "type": "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee"
    },
    {
        "name": "tax",
        "baseName": "tax",
        "type": "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax"
    }
];
//# sourceMappingURL=GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown.js.map