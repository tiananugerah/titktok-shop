"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody = void 0;
class AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody {
    static getAttributeTypeMap() {
        return AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody.attributeTypeMap;
    }
}
exports.AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody = AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody;
AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody.discriminator = undefined;
AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody.attributeTypeMap = [
    {
        "name": "rejectReasons",
        "baseName": "reject_reasons",
        "type": "Array<string>"
    },
    {
        "name": "reviewResult",
        "baseName": "review_result",
        "type": "string"
    }
];
//# sourceMappingURL=ReviewAffiliatePartnerCampaignProductRequestBody.js.map