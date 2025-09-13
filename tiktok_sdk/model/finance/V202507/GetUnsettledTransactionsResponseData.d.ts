import { Finance202507GetUnsettledTransactionsResponseDataTransactions } from './GetUnsettledTransactionsResponseDataTransactions';
export declare class Finance202507GetUnsettledTransactionsResponseData {
    'nextPageToken'?: string;
    'sumEstAdjustmentAmount'?: string;
    'sumEstFeeAmount'?: string;
    'sumEstRevenueAmount'?: string;
    'sumEstSettlementAmount'?: string;
    'totalCount'?: number;
    'transactions'?: Array<Finance202507GetUnsettledTransactionsResponseDataTransactions>;
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
//# sourceMappingURL=GetUnsettledTransactionsResponseData.d.ts.map