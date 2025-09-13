import { Product202309SearchProductsResponseDataProductsRecommendedCategories } from './SearchProductsResponseDataProductsRecommendedCategories';
import { Product202309SearchProductsResponseDataProductsSkus } from './SearchProductsResponseDataProductsSkus';
export declare class Product202309SearchProductsResponseDataProducts {
    'createTime'?: number;
    'id'?: string;
    'productSyncFailReasons'?: Array<string>;
    'recommendedCategories'?: Array<Product202309SearchProductsResponseDataProductsRecommendedCategories>;
    'salesRegions'?: Array<string>;
    'skus'?: Array<Product202309SearchProductsResponseDataProductsSkus>;
    'status'?: string;
    'title'?: string;
    'updateTime'?: number;
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
//# sourceMappingURL=SearchProductsResponseDataProducts.d.ts.map