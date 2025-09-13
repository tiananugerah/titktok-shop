"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405CreateAffiliatePartnerCampaignResponse = void 0;
class AffiliatePartner202405CreateAffiliatePartnerCampaignResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202405CreateAffiliatePartnerCampaignResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202405CreateAffiliatePartnerCampaignResponse = AffiliatePartner202405CreateAffiliatePartnerCampaignResponse;
AffiliatePartner202405CreateAffiliatePartnerCampaignResponse.discriminator = undefined;
AffiliatePartner202405CreateAffiliatePartnerCampaignResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202405CreateAffiliatePartnerCampaignResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=CreateAffiliatePartnerCampaignResponse.js.map