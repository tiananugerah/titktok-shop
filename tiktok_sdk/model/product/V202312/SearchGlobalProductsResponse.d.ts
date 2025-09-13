import { Product202312SearchGlobalProductsResponseData } from './SearchGlobalProductsResponseData';
export declare class Product202312SearchGlobalProductsResponse {
    'code'?: number;
    'data'?: Product202312SearchGlobalProductsResponseData;
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