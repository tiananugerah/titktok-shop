import { Product202309RecommendCategoryResponseData } from './RecommendCategoryResponseData';
export declare class Product202309RecommendCategoryResponse {
    'code'?: number;
    'data'?: Product202309RecommendCategoryResponseData;
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
//# sourceMappingURL=RecommendCategoryResponse.d.ts.map