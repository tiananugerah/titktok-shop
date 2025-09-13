import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsCommission } from './CreatorSelectAffiliateProductResponseDataProductsCommission';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsMarketPerformance } from './CreatorSelectAffiliateProductResponseDataProductsMarketPerformance';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsPrice } from './CreatorSelectAffiliateProductResponseDataProductsPrice';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsReview } from './CreatorSelectAffiliateProductResponseDataProductsReview';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsShop } from './CreatorSelectAffiliateProductResponseDataProductsShop';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsStock } from './CreatorSelectAffiliateProductResponseDataProductsStock';
export declare class AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts {
    'brandName'?: string;
    'commission'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsCommission;
    'id'?: string;
    'mainImageUrl'?: string;
    'marketPerformance'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsMarketPerformance;
    'price'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsPrice;
    'review'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsReview;
    'shop'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsShop;
    'stock'?: AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsStock;
    'title'?: string;
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
//# sourceMappingURL=CreatorSelectAffiliateProductResponseDataProducts.d.ts.map