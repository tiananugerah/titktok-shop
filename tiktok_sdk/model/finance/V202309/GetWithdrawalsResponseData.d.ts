import { Finance202309GetWithdrawalsResponseDataWithdrawals } from './GetWithdrawalsResponseDataWithdrawals';
export declare class Finance202309GetWithdrawalsResponseData {
    'nextPageToken'?: string;
    'totalCount'?: number;
    'withdrawals'?: Array<Finance202309GetWithdrawalsResponseDataWithdrawals>;
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
//# sourceMappingURL=GetWithdrawalsResponseData.d.ts.map