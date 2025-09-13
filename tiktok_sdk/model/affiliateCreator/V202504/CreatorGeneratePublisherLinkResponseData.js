"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202504CreatorGeneratePublisherLinkResponseData = void 0;
class AffiliateCreator202504CreatorGeneratePublisherLinkResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202504CreatorGeneratePublisherLinkResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202504CreatorGeneratePublisherLinkResponseData = AffiliateCreator202504CreatorGeneratePublisherLinkResponseData;
AffiliateCreator202504CreatorGeneratePublisherLinkResponseData.discriminator = undefined;
AffiliateCreator202504CreatorGeneratePublisherLinkResponseData.attributeTypeMap = [
    {
        "name": "failedMaterials",
        "baseName": "failed_materials",
        "type": "Array<AffiliateCreator202504CreatorGeneratePublisherLinkResponseDataFailedMaterials>"
    },
    {
        "name": "sharingLinks",
        "baseName": "sharing_links",
        "type": "Array<AffiliateCreator202504CreatorGeneratePublisherLinkResponseDataSharingLinks>"
    }
];
//# sourceMappingURL=CreatorGeneratePublisherLinkResponseData.js.map