"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown = void 0;
class Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown {
    static getAttributeTypeMap() {
        return Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown.attributeTypeMap;
    }
}
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown = Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown;
Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown.discriminator = undefined;
Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown.attributeTypeMap = [
    {
        "name": "actualShippingFeeAmount",
        "baseName": "actual_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "customerPaidShippingFeeAmount",
        "baseName": "customer_paid_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "exchangeShippingFeeAmount",
        "baseName": "exchange_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "replacementShippingFeeAmount",
        "baseName": "replacement_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "returnShippingFeeAmount",
        "baseName": "return_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "shippingFeeDiscountAmount",
        "baseName": "shipping_fee_discount_amount",
        "type": "string"
    },
    {
        "name": "shippingInsuranceFeeAmount",
        "baseName": "shipping_insurance_fee_amount",
        "type": "string"
    },
    {
        "name": "signatureConfirmationFeeAmount",
        "baseName": "signature_confirmation_fee_amount",
        "type": "string"
    },
    {
        "name": "supplementaryComponent",
        "baseName": "supplementary_component",
        "type": "Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent"
    }
];
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown.js.map