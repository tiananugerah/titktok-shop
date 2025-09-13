"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown = void 0;
class Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown {
    static getAttributeTypeMap() {
        return Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown.attributeTypeMap;
    }
}
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown = Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown;
Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown.discriminator = undefined;
Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown.attributeTypeMap = [
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
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown.js.map