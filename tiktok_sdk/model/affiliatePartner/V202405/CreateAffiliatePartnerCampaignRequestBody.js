"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody = void 0;
class AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody {
    static getAttributeTypeMap() {
        return AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody.attributeTypeMap;
    }
}
exports.AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody = AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody;
AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody.discriminator = undefined;
AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody.attributeTypeMap = [
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
        "type": "AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBodyContactInfo"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
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
        "name": "targetSellerTypes",
        "baseName": "target_seller_types",
        "type": "Array<string>"
    },
    {
        "name": "targetShopCodes",
        "baseName": "target_shop_codes",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=CreateAffiliatePartnerCampaignRequestBody.js.map