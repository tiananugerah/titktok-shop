import { Finance202309GetTransactionsbyOrderResponseDataStatementTransactions } from './GetTransactionsbyOrderResponseDataStatementTransactions';
export declare class Finance202309GetTransactionsbyOrderResponseData {
    'orderCreateTime'?: number;
    'orderId'?: string;
    'statementTransactions'?: Array<Finance202309GetTransactionsbyOrderResponseDataStatementTransactions>;
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