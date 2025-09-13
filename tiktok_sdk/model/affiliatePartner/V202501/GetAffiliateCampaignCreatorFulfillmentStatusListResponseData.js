"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData = AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData.attributeTypeMap = [
    {
        "name": "campaignProductStatistics",
        "baseName": "campaign_product_statistics",
        "type": "Array<AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics>"
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
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusListResponseData.js.map