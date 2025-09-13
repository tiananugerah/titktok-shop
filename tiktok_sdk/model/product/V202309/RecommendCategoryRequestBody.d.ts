import { Product202309RecommendCategoryRequestBodyImages } from './RecommendCategoryRequestBodyImages';
export declare class Product202309RecommendCategoryRequestBody {
    'categoryVersion'?: string;
    'description'?: string;
    'images'?: Array<Product202309RecommendCategoryRequestBodyImages>;
    'includeProhibitedCategories'?: boolean;
    'listingPlatform'?: string;
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
//# sourceMappingURL=RecommendCategoryRequestBody.d.ts.map