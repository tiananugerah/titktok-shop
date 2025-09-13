import { Product202309GetProductResponseData } from './GetProductResponseData';
export declare class Product202309GetProductResponse {
    'code'?: number;
    'data'?: Product202309GetProductResponseData;
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
//# sourceMappingURL=GetProductResponse.d.ts.map