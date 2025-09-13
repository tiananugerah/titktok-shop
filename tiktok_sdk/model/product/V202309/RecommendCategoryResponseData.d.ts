import { Product202309RecommendCategoryResponseDataCategories } from './RecommendCategoryResponseDataCategories';
export declare class Product202309RecommendCategoryResponseData {
    'categories'?: Array<Product202309RecommendCategoryResponseDataCategories>;
    'leafCategoryId'?: string;
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
//# sourceMappingURL=RecommendCategoryResponseData.d.ts.map