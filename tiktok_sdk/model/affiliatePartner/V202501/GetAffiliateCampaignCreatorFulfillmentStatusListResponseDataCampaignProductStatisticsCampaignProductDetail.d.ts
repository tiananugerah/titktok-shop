import { AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailIndicatorData } from './GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailIndicatorData';
import { AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductPrice } from './GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductPrice';
import { AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductThumbnail } from './GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductThumbnail';
export declare class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail {
    'creatorCommissionPercent'?: string;
    'indicatorData'?: AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailIndicatorData;
    'partnerCommissionPercent'?: string;
    'planCommissionPercent'?: string;
    'productId'?: string;
    'productName'?: string;
    'productPrice'?: AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductPrice;
    'productStatus'?: string;
    'productStockCount'?: string;
    'productThumbnail'?: AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductThumbnail;
    'totalCommissionPercent'?: string;
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
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail.d.ts.map