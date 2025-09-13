import { AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataContactInfo } from './GetAffiliatePartnerCampaignDetailResponseDataContactInfo';
import { AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataTargetShops } from './GetAffiliatePartnerCampaignDetailResponseDataTargetShops';
export declare class AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData {
    'campaignEndTime'?: number;
    'campaignStartTime'?: number;
    'commissionRate'?: number;
    'contactInfo'?: AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataContactInfo;
    'description'?: string;
    'id'?: string;
    'name'?: string;
    'region'?: string;
    'registrationEndTime'?: number;
    'registrationStartTime'?: number;
    'status'?: string;
    'targetSellerTypes'?: Array<string>;
    'targetShops'?: Array<AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataTargetShops>;
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
//# sourceMappingURL=GetAffiliatePartnerCampaignDetailResponseData.d.ts.map