"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse = AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse;
AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseData"
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
//# sourceMappingURL=GetAffiliateCampaignCreatorProductSampleStatusResponse.js.map