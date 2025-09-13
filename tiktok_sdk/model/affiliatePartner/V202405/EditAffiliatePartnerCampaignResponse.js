"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405EditAffiliatePartnerCampaignResponse = void 0;
class AffiliatePartner202405EditAffiliatePartnerCampaignResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202405EditAffiliatePartnerCampaignResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202405EditAffiliatePartnerCampaignResponse = AffiliatePartner202405EditAffiliatePartnerCampaignResponse;
AffiliatePartner202405EditAffiliatePartnerCampaignResponse.discriminator = undefined;
AffiliatePartner202405EditAffiliatePartnerCampaignResponse.attributeTypeMap = [
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
//# sourceMappingURL=EditAffiliatePartnerCampaignResponse.js.map