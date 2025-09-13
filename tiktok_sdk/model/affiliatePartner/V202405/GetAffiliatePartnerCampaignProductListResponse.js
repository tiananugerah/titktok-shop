"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse = AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData"
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
//# sourceMappingURL=GetAffiliatePartnerCampaignProductListResponse.js.map