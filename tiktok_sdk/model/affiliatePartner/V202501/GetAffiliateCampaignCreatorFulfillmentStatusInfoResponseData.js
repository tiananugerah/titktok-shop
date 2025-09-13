"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData = AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "promotionCreators",
        "baseName": "promotion_creators",
        "type": "Array<AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators>"
    },
    {
        "name": "totalCreatorCount",
        "baseName": "total_creator_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData.js.map