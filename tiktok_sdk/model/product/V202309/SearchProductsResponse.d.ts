import { Product202309SearchProductsResponseData } from './SearchProductsResponseData';
export declare class Product202309SearchProductsResponse {
    'code'?: number;
    'data'?: Product202309SearchProductsResponseData;
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
//# sourceMappingURL=SearchProductsResponse.d.ts.map