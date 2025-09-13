"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody = void 0;
class AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody = AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody;
AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody.discriminator = undefined;
AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaign_id",
        "type": "string"
    },
    {
        "name": "material",
        "baseName": "material",
        "type": "AffiliateCreator202504CreatorGeneratePublisherLinkRequestBodyMaterial"
    }
];
//# sourceMappingURL=CreatorGeneratePublisherLinkRequestBody.js.map