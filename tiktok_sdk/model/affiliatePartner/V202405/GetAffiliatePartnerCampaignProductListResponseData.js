"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData = AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetAffiliatePartnerCampaignProductListResponseData.js.map