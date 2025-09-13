import { AffiliatePartner202405EditAffiliatePartnerCampaignRequestBodyContactInfo } from './EditAffiliatePartnerCampaignRequestBodyContactInfo';
export declare class AffiliatePartner202405EditAffiliatePartnerCampaignRequestBody {
    'campaignEndTime'?: number;
    'campaignStartTime'?: number;
    'commissionRate'?: number;
    'contactInfo'?: AffiliatePartner202405EditAffiliatePartnerCampaignRequestBodyContactInfo;
    'description'?: string;
    'name'?: string;
    'registrationEndTime'?: number;
    'registrationStartTime'?: number;
    'targetSellerTypes'?: Array<string>;
    'targetShopCodes'?: Array<string>;
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
//# sourceMappingURL=EditAffiliatePartnerCampaignRequestBody.d.ts.map