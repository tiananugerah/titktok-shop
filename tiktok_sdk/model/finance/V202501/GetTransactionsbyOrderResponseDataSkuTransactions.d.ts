import { Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown } from './GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown';
import { Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown } from './GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown';
import { Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown } from './GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown';
export declare class Finance202501GetTransactionsbyOrderResponseDataSkuTransactions {
    'feeTaxAmount'?: string;
    'feeTaxBreakdown'?: Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown;
    'productName'?: string;
    'quantity'?: string;
    'revenueAmount'?: string;
    'revenueBreakdown'?: Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown;
    'settlementAmount'?: string;
    'shippingCostAmount'?: string;
    'shippingCostBreakdown'?: Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown;
    'skuId'?: string;
    'skuName'?: string;
    'statementId'?: string;
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
//# sourceMappingURL=GetTransactionsbyOrderResponseDataSkuTransactions.d.ts.map