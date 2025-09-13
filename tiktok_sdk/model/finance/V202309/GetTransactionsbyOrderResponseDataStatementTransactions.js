"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetTransactionsbyOrderResponseDataStatementTransactions = void 0;
class Finance202309GetTransactionsbyOrderResponseDataStatementTransactions {
    static getAttributeTypeMap() {
        return Finance202309GetTransactionsbyOrderResponseDataStatementTransactions.attributeTypeMap;
    }
}
exports.Finance202309GetTransactionsbyOrderResponseDataStatementTransactions = Finance202309GetTransactionsbyOrderResponseDataStatementTransactions;
Finance202309GetTransactionsbyOrderResponseDataStatementTransactions.discriminator = undefined;
Finance202309GetTransactionsbyOrderResponseDataStatementTransactions.attributeTypeMap = [
    {
        "name": "actualReturnShippingFeeAmount",
        "baseName": "actual_return_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "actualShippingFeeAmount",
        "baseName": "actual_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "adjustmentAmount",
        "baseName": "adjustment_amount",
        "type": "string"
    },
    {
        "name": "affiliateAdsCommissionAmount",
        "baseName": "affiliate_ads_commission_amount",
        "type": "string"
    },
    {
        "name": "affiliateCommissionAmount",
        "baseName": "affiliate_commission_amount",
        "type": "string"
    },
    {
        "name": "affiliateCommissionBeforePit",
        "baseName": "affiliate_commission_before_pit",
        "type": "string"
    },
    {
        "name": "affiliatePartnerCommissionAmount",
        "baseName": "affiliate_partner_commission_amount",
        "type": "string"
    },
    {
        "name": "afterSellerDiscountsSubtotalAmount",
        "baseName": "after_seller_discounts_subtotal_amount",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "customerOrderRefundAmount",
        "baseName": "customer_order_refund_amount",
        "type": "string"
    },
    {
        "name": "customerPaidShippingFeeAmount",
        "baseName": "customer_paid_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "customerPaidShippingFeeRefundAmount",
        "baseName": "customer_paid_shipping_fee_refund_amount",
        "type": "string"
    },
    {
        "name": "customerPaymentAmount",
        "baseName": "customer_payment_amount",
        "type": "string"
    },
    {
        "name": "customerRefundAmount",
        "baseName": "customer_refund_amount",
        "type": "string"
    },
    {
        "name": "customerShippingFeeAmount",
        "baseName": "customer_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "customerShippingFeeOffsetAmount",
        "baseName": "customer_shipping_fee_offset_amount",
        "type": "string"
    },
    {
        "name": "fbmShippingCostAmount",
        "baseName": "fbm_shipping_cost_amount",
        "type": "string"
    },
    {
        "name": "fbtFulfillmentFeeAmount",
        "baseName": "fbt_fulfillment_fee_amount",
        "type": "string"
    },
    {
        "name": "fbtFulfillmentFeeReimbursementAmount",
        "baseName": "fbt_fulfillment_fee_reimbursement_amount",
        "type": "string"
    },
    {
        "name": "fbtShippingCostAmount",
        "baseName": "fbt_shipping_cost_amount",
        "type": "string"
    },
    {
        "name": "feeAmount",
        "baseName": "fee_amount",
        "type": "string"
    },
    {
        "name": "grossSalesAmount",
        "baseName": "gross_sales_amount",
        "type": "string"
    },
    {
        "name": "grossSalesRefundAmount",
        "baseName": "gross_sales_refund_amount",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isrIncomeTaxAmount",
        "baseName": "isr_income_tax_amount",
        "type": "string"
    },
    {
        "name": "ivaVatAmount",
        "baseName": "iva_vat_amount",
        "type": "string"
    },
    {
        "name": "netSalesAmount",
        "baseName": "net_sales_amount",
        "type": "string"
    },
    {
        "name": "pitAmount",
        "baseName": "pit_amount",
        "type": "string"
    },
    {
        "name": "platformCommissionAmount",
        "baseName": "platform_commission_amount",
        "type": "string"
    },
    {
        "name": "platformDiscountAmount",
        "baseName": "platform_discount_amount",
        "type": "string"
    },
    {
        "name": "platformDiscountRefundAmount",
        "baseName": "platform_discount_refund_amount",
        "type": "string"
    },
    {
        "name": "platformRefundSubsidyAmount",
        "baseName": "platform_refund_subsidy_amount",
        "type": "string"
    },
    {
        "name": "platformShippingFeeDiscountAmount",
        "baseName": "platform_shipping_fee_discount_amount",
        "type": "string"
    },
    {
        "name": "promoShippingIncentiveAmount",
        "baseName": "promo_shipping_incentive_amount",
        "type": "string"
    },
    {
        "name": "referralFeeAmount",
        "baseName": "referral_fee_amount",
        "type": "string"
    },
    {
        "name": "refundAdministrationFeeAmount",
        "baseName": "refund_administration_fee_amount",
        "type": "string"
    },
    {
        "name": "refundShippingCostDiscountAmount",
        "baseName": "refund_shipping_cost_discount_amount",
        "type": "string"
    },
    {
        "name": "retailDeliveryFeeAmount",
        "baseName": "retail_delivery_fee_amount",
        "type": "string"
    },
    {
        "name": "retailDeliveryFeePaymentAmount",
        "baseName": "retail_delivery_fee_payment_amount",
        "type": "string"
    },
    {
        "name": "retailDeliveryFeeRefundAmount",
        "baseName": "retail_delivery_fee_refund_amount",
        "type": "string"
    },
    {
        "name": "returnShippingFeeAmount",
        "baseName": "return_shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "revenueAmount",
        "baseName": "revenue_amount",
        "type": "string"
    },
    {
        "name": "salesTaxAmount",
        "baseName": "sales_tax_amount",
        "type": "string"
    },
    {
        "name": "salesTaxPaymentAmount",
        "baseName": "sales_tax_payment_amount",
        "type": "string"
    },
    {
        "name": "salesTaxRefundAmount",
        "baseName": "sales_tax_refund_amount",
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
        "name": "settlementAmount",
        "baseName": "settlement_amount",
        "type": "string"
    },
    {
        "name": "shippingCostAmount",
        "baseName": "shipping_cost_amount",
        "type": "string"
    },
    {
        "name": "shippingCostDiscountAmount",
        "baseName": "shipping_cost_discount_amount",
        "type": "string"
    },
    {
        "name": "shippingFeeAmount",
        "baseName": "shipping_fee_amount",
        "type": "string"
    },
    {
        "name": "shippingFeeSubsidyAmount",
        "baseName": "shipping_fee_subsidy_amount",
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
        "name": "skuStatementTransactions",
        "baseName": "sku_statement_transactions",
        "type": "Array<Finance202309GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions>"
    },
    {
        "name": "statementId",
        "baseName": "statement_id",
        "type": "string"
    },
    {
        "name": "statementTime",
        "baseName": "statement_time",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "transactionFeeAmount",
        "baseName": "transaction_fee_amount",
        "type": "string"
    }
];
//# sourceMappingURL=GetTransactionsbyOrderResponseDataStatementTransactions.js.map