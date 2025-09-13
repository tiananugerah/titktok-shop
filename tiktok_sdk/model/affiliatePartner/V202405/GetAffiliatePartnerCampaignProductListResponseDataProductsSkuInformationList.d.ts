import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListBasePrice } from './GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListBasePrice';
import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListInventory } from './GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListInventory';
import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListProperties } from './GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListProperties';
import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListRegionPrices } from './GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListRegionPrices';
export declare class AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList {
    'basePrice'?: AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListBasePrice;
    'inventory'?: AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListInventory;
    'properties'?: Array<AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListProperties>;
    'regionPrices'?: Array<AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListRegionPrices>;
    'skuId'?: string;
    'skuName'?: string;
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
//# sourceMappingURL=GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList.d.ts.map