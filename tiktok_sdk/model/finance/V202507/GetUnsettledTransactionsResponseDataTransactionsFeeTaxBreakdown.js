"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown = void 0;
class Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown {
    static getAttributeTypeMap() {
        return Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown.attributeTypeMap;
    }
}
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown = Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown;
Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown.discriminator = undefined;
Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown.attributeTypeMap = [
    {
        "name": "fee",
        "baseName": "fee",
        "type": "Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee"
    },
    {
        "name": "tax",
        "baseName": "tax",
        "type": "Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax"
    }
];
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown.js.map