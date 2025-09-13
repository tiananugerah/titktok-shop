import { Product202312SearchProductsResponseDataProductsAudit } from './SearchProductsResponseDataProductsAudit';
import { Product202312SearchProductsResponseDataProductsIntegratedPlatformStatuses } from './SearchProductsResponseDataProductsIntegratedPlatformStatuses';
import { Product202312SearchProductsResponseDataProductsRecommendedCategories } from './SearchProductsResponseDataProductsRecommendedCategories';
import { Product202312SearchProductsResponseDataProductsSkus } from './SearchProductsResponseDataProductsSkus';
export declare class Product202312SearchProductsResponseDataProducts {
    'audit'?: Product202312SearchProductsResponseDataProductsAudit;
    'createTime'?: number;
    'id'?: string;
    'integratedPlatformStatuses'?: Array<Product202312SearchProductsResponseDataProductsIntegratedPlatformStatuses>;
    'isNotForSale'?: boolean;
    'listingQualityTier'?: string;
    'productSyncFailReasons'?: Array<string>;
    'recommendedCategories'?: Array<Product202312SearchProductsResponseDataProductsRecommendedCategories>;
    'salesRegions'?: Array<string>;
    'skus'?: Array<Product202312SearchProductsResponseDataProductsSkus>;
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