"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse = AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse;
AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponseData"
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
//# sourceMappingURL=GetAffiliateCampaignCreatorProductContentStatisticsResponse.js.map