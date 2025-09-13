import { Finance202309GetPaymentsResponseData } from './GetPaymentsResponseData';
export declare class Finance202309GetPaymentsResponse {
    'code'?: number;
    'data'?: Finance202309GetPaymentsResponseData;
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
//# sourceMappingURL=GetPaymentsResponse.d.ts.map