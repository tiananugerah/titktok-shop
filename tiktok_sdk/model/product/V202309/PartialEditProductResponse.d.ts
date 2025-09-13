import { Product202309PartialEditProductResponseData } from './PartialEditProductResponseData';
export declare class Product202309PartialEditProductResponse {
    'code'?: number;
    'data'?: Product202309PartialEditProductResponseData;
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
//# sourceMappingURL=PartialEditProductResponse.d.ts.map