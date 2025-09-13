"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse = void 0;
class AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse = AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse;
AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse.discriminator = undefined;
AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData"
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
//# sourceMappingURL=PartnerGenerateMultiAffiliateCampaignProductLinkResponse.js.map