import { Product202309SearchGlobalProductsResponseData } from './SearchGlobalProductsResponseData';
export declare class Product202309SearchGlobalProductsResponse {
    'code'?: number;
    'data'?: Product202309SearchGlobalProductsResponseData;
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
//# sourceMappingURL=SearchGlobalProductsResponse.d.ts.map