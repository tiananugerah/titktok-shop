import { Fulfillment202309GetTrackingResponseData } from './GetTrackingResponseData';
export declare class Fulfillment202309GetTrackingResponse {
    'code'?: number;
    'data'?: Fulfillment202309GetTrackingResponseData;
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
//# sourceMappingURL=GetTrackingResponse.d.ts.map