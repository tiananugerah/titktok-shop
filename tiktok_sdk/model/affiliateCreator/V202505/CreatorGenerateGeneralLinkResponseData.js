"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202505CreatorGenerateGeneralLinkResponseData = void 0;
class AffiliateCreator202505CreatorGenerateGeneralLinkResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202505CreatorGenerateGeneralLinkResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202505CreatorGenerateGeneralLinkResponseData = AffiliateCreator202505CreatorGenerateGeneralLinkResponseData;
AffiliateCreator202505CreatorGenerateGeneralLinkResponseData.discriminator = undefined;
AffiliateCreator202505CreatorGenerateGeneralLinkResponseData.attributeTypeMap = [
    {
        "name": "failedMaterials",
        "baseName": "failed_materials",
        "type": "Array<AffiliateCreator202505CreatorGenerateGeneralLinkResponseDataFailedMaterials>"
    },
    {
        "name": "sharingLinks",
        "baseName": "sharing_links",
        "type": "Array<AffiliateCreator202505CreatorGenerateGeneralLinkResponseDataSharingLinks>"
    }
];
//# sourceMappingURL=CreatorGenerateGeneralLinkResponseData.js.map