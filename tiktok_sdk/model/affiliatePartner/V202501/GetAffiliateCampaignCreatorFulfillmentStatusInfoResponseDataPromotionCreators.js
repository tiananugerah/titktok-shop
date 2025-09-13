"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators = AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators.attributeTypeMap = [
    {
        "name": "affiliateProductId",
        "baseName": "affiliate_product_id",
        "type": "string"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "string"
    },
    {
        "name": "creator",
        "baseName": "creator",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsCreator"
    },
    {
        "name": "effectiveEndTime",
        "baseName": "effective_end_time",
        "type": "string"
    },
    {
        "name": "effectiveStartTime",
        "baseName": "effective_start_time",
        "type": "string"
    },
    {
        "name": "freeSampleStatus",
        "baseName": "free_sample_status",
        "type": "string"
    },
    {
        "name": "paidAmount",
        "baseName": "paid_amount",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreatorsPaidAmount"
    },
    {
        "name": "roomCount",
        "baseName": "room_count",
        "type": "number"
    },
    {
        "name": "videoCount",
        "baseName": "video_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseDataPromotionCreators.js.map