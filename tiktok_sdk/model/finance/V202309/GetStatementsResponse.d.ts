import { Finance202309GetStatementsResponseData } from './GetStatementsResponseData';
export declare class Finance202309GetStatementsResponse {
    'code'?: number;
    'data'?: Finance202309GetStatementsResponseData;
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
//# sourceMappingURL=GetStatementsResponse.d.ts.map