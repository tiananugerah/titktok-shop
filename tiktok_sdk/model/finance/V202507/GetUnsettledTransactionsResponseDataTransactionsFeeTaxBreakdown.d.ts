import { Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee } from './GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee';
import { Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax } from './GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax';
export declare class Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown {
    'fee'?: Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownFee;
    'tax'?: Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdownTax;
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
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown.d.ts.map