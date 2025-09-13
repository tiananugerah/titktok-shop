import { Product202309EditProductResponseData } from './EditProductResponseData';
export declare class Product202309EditProductResponse {
    'code'?: number;
    'data'?: Product202309EditProductResponseData;
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
//# sourceMappingURL=EditProductResponse.d.ts.map