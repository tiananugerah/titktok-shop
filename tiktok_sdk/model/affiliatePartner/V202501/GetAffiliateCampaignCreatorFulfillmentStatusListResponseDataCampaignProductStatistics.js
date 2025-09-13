"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics = AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics.attributeTypeMap = [
    {
        "name": "campaignProductDetail",
        "baseName": "campaign_product_detail",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail"
    },
    {
        "name": "collaboratedCreatorsNum",
        "baseName": "collaborated_creators_num",
        "type": "number"
    },
    {
        "name": "creatorSalesNum",
        "baseName": "creator_sales_num",
        "type": "number"
    },
    {
        "name": "dataUpdateTime",
        "baseName": "data_update_time",
        "type": "string"
    },
    {
        "name": "promotedCreatorNum",
        "baseName": "promoted_creator_num",
        "type": "number"
    },
    {
        "name": "sampleRequestedCreatorNum",
        "baseName": "sample_requested_creator_num",
        "type": "number"
    }
];
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatistics.js.map