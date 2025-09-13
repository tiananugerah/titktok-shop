import { Finance202309GetTransactionsbyStatementResponseDataStatementTransactions } from './GetTransactionsbyStatementResponseDataStatementTransactions';
export declare class Finance202309GetTransactionsbyStatementResponseData {
    'adjustmentAmount'?: string;
    'currency'?: string;
    'feeAmount'?: string;
    'netSalesAmount'?: string;
    'nextPageToken'?: string;
    'revenueAmount'?: string;
    'settlementAmount'?: string;
    'shippingCostAmount'?: string;
    'statementId'?: string;
    'statementTime'?: number;
    'statementTransactions'?: Array<Finance202309GetTransactionsbyStatementResponseDataStatementTransactions>;
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
//# sourceMappingURL=GetTransactionsbyStatementResponseData.d.ts.map