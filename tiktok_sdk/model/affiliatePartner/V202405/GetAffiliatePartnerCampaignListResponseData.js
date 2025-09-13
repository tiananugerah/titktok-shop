"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData = AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData;
AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignListResponseData.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<AffiliatePartner202405GetAffiliatePartnerCampaignListResponseDataCampaigns>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetAffiliatePartnerCampaignListResponseData.js.map