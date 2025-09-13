import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsCategory } from './GetAffiliatePartnerCampaignProductListResponseDataProductsCategory';
import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsHighestPrice } from './GetAffiliatePartnerCampaignProductListResponseDataProductsHighestPrice';
import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsLowestPrice } from './GetAffiliatePartnerCampaignProductListResponseDataProductsLowestPrice';
import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList } from './GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList';
export declare class AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts {
    'category'?: AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsCategory;
    'creatorCommissionRate'?: number;
    'highestPrice'?: AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsHighestPrice;
    'id'?: string;
    'inventory'?: number;
    'isAvailable'?: boolean;
    'lowestPrice'?: AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsLowestPrice;
    'mainImageUrl'?: string;
    'name'?: string;
    'openCollaborationCommissionRate'?: number;
    'partnerCommissionRate'?: number;
    'productDescription'?: string;
    'productSales'?: number;
    'reviewStatus'?: string;
    'sampleQuota'?: number;
    'shopName'?: string;
    'skuInformationList'?: Array<AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList>;
    'totalCommissionRate'?: number;
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
//# sourceMappingURL=GetAffiliatePartnerCampaignProductListResponseDataProducts.d.ts.map