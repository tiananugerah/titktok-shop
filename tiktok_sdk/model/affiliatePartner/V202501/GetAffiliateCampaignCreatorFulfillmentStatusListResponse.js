"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse = AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseData"
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
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusListResponse.js.map