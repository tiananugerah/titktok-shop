import { Fulfillment202309GetOrderSplitAttributesResponseData } from './GetOrderSplitAttributesResponseData';
export declare class Fulfillment202309GetOrderSplitAttributesResponse {
    'code'?: number;
    'data'?: Fulfillment202309GetOrderSplitAttributesResponseData;
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
//# sourceMappingURL=GetOrderSplitAttributesResponse.d.ts.map