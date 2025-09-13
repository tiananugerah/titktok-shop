"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData = void 0;
class AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData {
    static getAttributeTypeMap() {
        return AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData.attributeTypeMap;
    }
}
exports.AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData = AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData;
AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData.discriminator = undefined;
AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseData.attributeTypeMap = [
    {
        "name": "failedProductIds",
        "baseName": "failed_product_ids",
        "type": "Array<string>"
    },
    {
        "name": "productPromotionLinks",
        "baseName": "product_promotion_links",
        "type": "Array<AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponseDataProductPromotionLinks>"
    }
];
//# sourceMappingURL=PartnerGenerateMultiAffiliateCampaignProductLinkResponseData.js.map