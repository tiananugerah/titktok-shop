"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax = void 0;
class Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax {
    static getAttributeTypeMap() {
        return Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax.attributeTypeMap;
    }
}
exports.Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax = Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax;
Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax.discriminator = undefined;
Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax.attributeTypeMap = [
    {
        "name": "customsClearanceAmount",
        "baseName": "customs_clearance_amount",
        "type": "string"
    },
    {
        "name": "customsDutyAmount",
        "baseName": "customs_duty_amount",
        "type": "string"
    },
    {
        "name": "gstAmount",
        "baseName": "gst_amount",
        "type": "string"
    },
    {
        "name": "importVatAmount",
        "baseName": "import_vat_amount",
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
        "name": "sstAmount",
        "baseName": "sst_amount",
        "type": "string"
    },
    {
        "name": "vatAmount",
        "baseName": "vat_amount",
        "type": "string"
    }
];
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax.js.map