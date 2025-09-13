import { AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsCommissionRateRange } from './CreatorSelectAffiliateProductRequestBodyFilterParamsCommissionRateRange';
import { AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsPriceRange } from './CreatorSelectAffiliateProductRequestBodyFilterParamsPriceRange';
import { AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsShopRatingRange } from './CreatorSelectAffiliateProductRequestBodyFilterParamsShopRatingRange';
import { AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsSoldQuantityRange } from './CreatorSelectAffiliateProductRequestBodyFilterParamsSoldQuantityRange';
export declare class AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams {
    'categoryIds'?: Array<string>;
    'commissionRateRange'?: AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsCommissionRateRange;
    'poolIds'?: Array<string>;
    'priceRange'?: AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsPriceRange;
    'productIds'?: Array<string>;
    'shopRatingRange'?: AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsShopRatingRange;
    'soldQuantityRange'?: AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsSoldQuantityRange;
    'titleKeyword'?: string;
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
//# sourceMappingURL=CreatorSelectAffiliateProductRequestBodyFilterParams.d.ts.map