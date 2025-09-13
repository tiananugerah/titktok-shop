import { Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent } from './GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent';
export declare class Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown {
    'actualShippingFeeAmount'?: string;
    'customerPaidShippingFeeAmount'?: string;
    'exchangeShippingFeeAmount'?: string;
    'replacementShippingFeeAmount'?: string;
    'returnShippingFeeAmount'?: string;
    'shippingFeeDiscountAmount'?: string;
    'shippingInsuranceFeeAmount'?: string;
    'signatureConfirmationFeeAmount'?: string;
    'supplementaryComponent'?: Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdownSupplementaryComponent;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown.d.ts.map