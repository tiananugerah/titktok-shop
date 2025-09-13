import { Finance202309GetWithdrawalsResponseData } from './GetWithdrawalsResponseData';
export declare class Finance202309GetWithdrawalsResponse {
    'code'?: number;
    'data'?: Finance202309GetWithdrawalsResponseData;
    'message'?: string;
    'requestId'?: string;
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
//# sourceMappingURL=GetWithdrawalsResponse.d.ts.map