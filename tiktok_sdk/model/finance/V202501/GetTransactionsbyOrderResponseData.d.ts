import { Finance202501GetTransactionsbyOrderResponseDataSkuTransactions } from './GetTransactionsbyOrderResponseDataSkuTransactions';
export declare class Finance202501GetTransactionsbyOrderResponseData {
    'currency'?: string;
    'feeAndTaxAmount'?: string;
    'orderCreateTime'?: number;
    'orderId'?: string;
    'revenueAmount'?: string;
    'settlementAmount'?: string;
    'shippingCostAmount'?: string;
    'skuTransactions'?: Array<Finance202501GetTransactionsbyOrderResponseDataSkuTransactions>;
    'totalCount'?: number;
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
//# sourceMappingURL=GetTransactionsbyOrderResponseData.d.ts.map