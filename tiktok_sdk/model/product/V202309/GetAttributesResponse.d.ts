import { Product202309GetAttributesResponseData } from './GetAttributesResponseData';
export declare class Product202309GetAttributesResponse {
    'code'?: number;
    'data'?: Product202309GetAttributesResponseData;
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
//# sourceMappingURL=GetAttributesResponse.d.ts.map