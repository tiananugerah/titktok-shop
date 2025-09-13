"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown = void 0;
class Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown = Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown;
Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown.discriminator = undefined;
Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown.attributeTypeMap = [
    {
        "name": "codServiceFeeAmount",
        "baseName": "cod_service_fee_amount",
        "type": "string"
    },
    {
        "name": "refundCodServiceFeeAmount",
        "baseName": "refund_cod_service_fee_amount",
        "type": "string"
    },
    {
        "name": "refundSubtotalBeforeDiscountAmount",
        "baseName": "refund_subtotal_before_discount_amount",
        "type": "string"
    },
    {
        "name": "sellerDiscountAmount",
        "baseName": "seller_discount_amount",
        "type": "string"
    },
    {
        "name": "sellerDiscountRefundAmount",
        "baseName": "seller_discount_refund_amount",
        "type": "string"
    },
    {
        "name": "subtotalBeforeDiscountAmount",
        "baseName": "subtotal_before_discount_amount",
        "type": "string"
    }
];
//# sourceMappingURL=GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown.js.map