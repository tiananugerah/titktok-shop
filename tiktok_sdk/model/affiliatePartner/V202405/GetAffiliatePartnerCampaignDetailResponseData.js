"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData = AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData;
AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData.attributeTypeMap = [
    {
        "name": "campaignEndTime",
        "baseName": "campaign_end_time",
        "type": "number"
    },
    {
        "name": "campaignStartTime",
        "baseName": "campaign_start_time",
        "type": "number"
    },
    {
        "name": "commissionRate",
        "baseName": "commission_rate",
        "type": "number"
    },
    {
        "name": "contactInfo",
        "baseName": "contact_info",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataContactInfo"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "registrationEndTime",
        "baseName": "registration_end_time",
        "type": "number"
    },
    {
        "name": "registrationStartTime",
        "baseName": "registration_start_time",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "targetSellerTypes",
        "baseName": "target_seller_types",
        "type": "Array<string>"
    },
    {
        "name": "targetShops",
        "baseName": "target_shops",
        "type": "Array<AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataTargetShops>"
    }
];
//# sourceMappingURL=GetAffiliatePartnerCampaignDetailResponseData.js.map