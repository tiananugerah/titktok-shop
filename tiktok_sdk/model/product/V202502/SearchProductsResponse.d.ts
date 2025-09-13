import { Product202502SearchProductsResponseData } from './SearchProductsResponseData';
export declare class Product202502SearchProductsResponse {
    'code'?: number;
    'data'?: Product202502SearchProductsResponseData;
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