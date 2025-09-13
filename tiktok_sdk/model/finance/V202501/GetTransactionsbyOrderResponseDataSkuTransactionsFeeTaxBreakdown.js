"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown = void 0;
class Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown = Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown;
Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown.discriminator = undefined;
Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown.attributeTypeMap = [
    {
        "name": "fee",
        "baseName": "fee",
        "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee"
    },
    {
        "name": "tax",
        "baseName": "tax",
        "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax"
    }
];
//# sourceMappingURL=GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown.js.map