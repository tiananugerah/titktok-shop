"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody = void 0;
class AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody = AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody;
AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody.discriminator = undefined;
AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaign_id",
        "type": "string"
    },
    {
        "name": "material",
        "baseName": "material",
        "type": "AffiliateCreator202505CreatorGenerateGeneralLinkRequestBodyMaterial"
    }
];
//# sourceMappingURL=CreatorGenerateGeneralLinkRequestBody.js.map