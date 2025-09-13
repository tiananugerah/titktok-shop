"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown = void 0;
class Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown = Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown;
Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown.discriminator = undefined;
Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown.attributeTypeMap = [
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
        "name": "failedDeliverySubsidyAmount",
        "baseName": "failed_delivery_subsidy_amount",
        "type": "string"
    },
    {
        "name": "fbtFulfillmentFeeReimbursementAmount",
        "baseName": "fbt_fulfillment_fee_reimbursement_amount",
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
        "name": "returnShippingFeePaidBuyerAmount",
        "baseName": "return_shipping_fee_paid_buyer_amount",
        "type": "string"
    },
    {
        "name": "returnShippingLabelFeeAmount",
        "baseName": "return_shipping_label_fee_amount",
        "type": "string"
    },
    {
        "name": "sellerSelfShippingServiceFeeAmount",
        "baseName": "seller_self_shipping_service_fee_amount",
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
        "type": "Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent"
    }
];
//# sourceMappingURL=GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown.js.map