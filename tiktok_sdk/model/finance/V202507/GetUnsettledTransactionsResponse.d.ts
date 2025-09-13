import { Finance202507GetUnsettledTransactionsResponseData } from './GetUnsettledTransactionsResponseData';
export declare class Finance202507GetUnsettledTransactionsResponse {
    'code'?: number;
    'data'?: Finance202507GetUnsettledTransactionsResponseData;
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
//# sourceMappingURL=GetUnsettledTransactionsResponse.d.ts.map