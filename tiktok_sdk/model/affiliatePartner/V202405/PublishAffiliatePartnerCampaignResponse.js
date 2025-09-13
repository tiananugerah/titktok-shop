"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405PublishAffiliatePartnerCampaignResponse = void 0;
class AffiliatePartner202405PublishAffiliatePartnerCampaignResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202405PublishAffiliatePartnerCampaignResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202405PublishAffiliatePartnerCampaignResponse = AffiliatePartner202405PublishAffiliatePartnerCampaignResponse;
AffiliatePartner202405PublishAffiliatePartnerCampaignResponse.discriminator = undefined;
AffiliatePartner202405PublishAffiliatePartnerCampaignResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=PublishAffiliatePartnerCampaignResponse.js.map