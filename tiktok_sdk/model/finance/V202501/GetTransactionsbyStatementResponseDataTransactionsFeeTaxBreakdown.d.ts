import { Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee } from './GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee';
import { Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax } from './GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax';
export declare class Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown {
    'fee'?: Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee;
    'tax'?: Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax;
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
//# sourceMappingURL=GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown.d.ts.map