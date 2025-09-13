import { AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsCreator } from './GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsCreator';
import { AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsPaidAmount } from './GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsPaidAmount';
export declare class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators {
    'affiliateProductId'?: string;
    'commission'?: string;
    'creator'?: AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsCreator;
    'effectiveEndTime'?: string;
    'effectiveStartTime'?: string;
    'freeSampleStatus'?: string;
    'paidAmount'?: AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsPaidAmount;
    'roomCount'?: number;
    'videoCount'?: number;
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
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators.d.ts.map