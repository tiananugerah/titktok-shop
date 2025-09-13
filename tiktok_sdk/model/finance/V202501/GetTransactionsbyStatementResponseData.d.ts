import { Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown } from './GetTransactionsbyStatementResponseDataTotalSettlementBreakdown';
import { Finance202501GetTransactionsbyStatementResponseDataTransactions } from './GetTransactionsbyStatementResponseDataTransactions';
export declare class Finance202501GetTransactionsbyStatementResponseData {
    'createTime'?: number;
    'currency'?: string;
    'id'?: string;
    'nextPageToken'?: string;
    'payableAmount'?: string;
    'status'?: string;
    'totalCount'?: number;
    'totalReserveAmount'?: string;
    'totalSettlementAmount'?: string;
    'totalSettlementBreakdown'?: Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown;
    'transactions'?: Array<Finance202501GetTransactionsbyStatementResponseDataTransactions>;
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