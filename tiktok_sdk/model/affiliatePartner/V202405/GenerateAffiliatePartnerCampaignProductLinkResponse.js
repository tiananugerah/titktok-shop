"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse = void 0;
class AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse = AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse;
AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse.discriminator = undefined;
AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponseData"
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
//# sourceMappingURL=GenerateAffiliatePartnerCampaignProductLinkResponse.js.map