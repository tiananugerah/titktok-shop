import { Product202502SearchProductsResponseDataProductsAudit } from './SearchProductsResponseDataProductsAudit';
import { Product202502SearchProductsResponseDataProductsIntegratedPlatformStatuses } from './SearchProductsResponseDataProductsIntegratedPlatformStatuses';
import { Product202502SearchProductsResponseDataProductsProductFamilies } from './SearchProductsResponseDataProductsProductFamilies';
import { Product202502SearchProductsResponseDataProductsRecommendedCategories } from './SearchProductsResponseDataProductsRecommendedCategories';
import { Product202502SearchProductsResponseDataProductsSkus } from './SearchProductsResponseDataProductsSkus';
export declare class Product202502SearchProductsResponseDataProducts {
    'audit'?: Product202502SearchProductsResponseDataProductsAudit;
    'createTime'?: number;
    'hasDraft'?: boolean;
    'id'?: string;
    'integratedPlatformStatuses'?: Array<Product202502SearchProductsResponseDataProductsIntegratedPlatformStatuses>;
    'isNotForSale'?: boolean;
    'listingQualityTier'?: string;
    'productFamilies'?: Array<Product202502SearchProductsResponseDataProductsProductFamilies>;
    'productSyncFailReasons'?: Array<string>;
    'recommendedCategories'?: Array<Product202502SearchProductsResponseDataProductsRecommendedCategories>;
    'salesRegions'?: Array<string>;
    'skus'?: Array<Product202502SearchProductsResponseDataProductsSkus>;
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