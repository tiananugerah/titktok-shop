import { Product202309GetGlobalAttributesResponseData } from './GetGlobalAttributesResponseData';
export declare class Product202309GetGlobalAttributesResponse {
    'code'?: number;
    'data'?: Product202309GetGlobalAttributesResponseData;
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
//# sourceMappingURL=GetGlobalAttributesResponse.d.ts.map