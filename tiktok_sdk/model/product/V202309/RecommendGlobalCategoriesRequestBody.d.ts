import { Product202309RecommendGlobalCategoriesRequestBodyImages } from './RecommendGlobalCategoriesRequestBodyImages';
export declare class Product202309RecommendGlobalCategoriesRequestBody {
    'categoryVersion'?: string;
    'description'?: string;
    'images'?: Array<Product202309RecommendGlobalCategoriesRequestBodyImages>;
    'productTitle'?: string;
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
//# sourceMappingURL=RecommendGlobalCategoriesRequestBody.d.ts.map