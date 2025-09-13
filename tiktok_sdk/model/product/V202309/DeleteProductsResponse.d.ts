import { Product202309DeleteProductsResponseData } from './DeleteProductsResponseData';
export declare class Product202309DeleteProductsResponse {
    'code'?: number;
    'data'?: Product202309DeleteProductsResponseData;
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
//# sourceMappingURL=DeleteProductsResponse.d.ts.map