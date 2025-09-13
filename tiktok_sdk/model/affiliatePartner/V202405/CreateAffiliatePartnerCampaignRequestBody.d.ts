import { AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBodyContactInfo } from './CreateAffiliatePartnerCampaignRequestBodyContactInfo';
export declare class AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody {
    'campaignEndTime'?: number;
    'campaignStartTime'?: number;
    'commissionRate'?: number;
    'contactInfo'?: AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBodyContactInfo;
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
//# sourceMappingURL=CreateAffiliatePartnerCampaignRequestBody.d.ts.map