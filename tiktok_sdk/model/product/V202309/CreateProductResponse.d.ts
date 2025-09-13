import { Product202309CreateProductResponseData } from './CreateProductResponseData';
export declare class Product202309CreateProductResponse {
    'code'?: number;
    'data'?: Product202309CreateProductResponseData;
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
//# sourceMappingURL=CreateProductResponse.d.ts.map