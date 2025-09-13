"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignListResponse = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignListResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignListResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignListResponse = AffiliatePartner202405GetAffiliatePartnerCampaignListResponse;
AffiliatePartner202405GetAffiliatePartnerCampaignListResponse.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignListResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData"
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
//# sourceMappingURL=GetAffiliatePartnerCampaignListResponse.js.map