"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202411SearchTapAffiliateOrdersRequestBody = void 0;
class AffiliatePartner202411SearchTapAffiliateOrdersRequestBody {
    static getAttributeTypeMap() {
        return AffiliatePartner202411SearchTapAffiliateOrdersRequestBody.attributeTypeMap;
    }
}
exports.AffiliatePartner202411SearchTapAffiliateOrdersRequestBody = AffiliatePartner202411SearchTapAffiliateOrdersRequestBody;
AffiliatePartner202411SearchTapAffiliateOrdersRequestBody.discriminator = undefined;
AffiliatePartner202411SearchTapAffiliateOrdersRequestBody.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaign_id",
        "type": "string"
    },
    {
        "name": "createTimeGe",
        "baseName": "create_time_ge",
        "type": "number"
    },
    {
        "name": "createTimeLt",
        "baseName": "create_time_lt",
        "type": "number"
    }
];
//# sourceMappingURL=SearchTapAffiliateOrdersRequestBody.js.map