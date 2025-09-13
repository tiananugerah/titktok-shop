"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse = AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse;
AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseData"
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
//# sourceMappingURL=GetAffiliatePartnerCampaignDetailResponse.js.map