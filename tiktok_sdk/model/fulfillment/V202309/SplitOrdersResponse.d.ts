import { Fulfillment202309SplitOrdersResponseData } from './SplitOrdersResponseData';
export declare class Fulfillment202309SplitOrdersResponse {
    'code'?: number;
    'data'?: Fulfillment202309SplitOrdersResponseData;
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
//# sourceMappingURL=SplitOrdersResponse.d.ts.map