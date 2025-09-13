"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse = AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponseData"
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
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse.js.map