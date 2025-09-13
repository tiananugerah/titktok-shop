"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202407GenerateAffiliateSharingLinkResponseData = void 0;
class AffiliateCreator202407GenerateAffiliateSharingLinkResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202407GenerateAffiliateSharingLinkResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202407GenerateAffiliateSharingLinkResponseData = AffiliateCreator202407GenerateAffiliateSharingLinkResponseData;
AffiliateCreator202407GenerateAffiliateSharingLinkResponseData.discriminator = undefined;
AffiliateCreator202407GenerateAffiliateSharingLinkResponseData.attributeTypeMap = [
    {
        "name": "affiliateSharingLinks",
        "baseName": "affiliate_sharing_links",
        "type": "Array<AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks>"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors>"
    }
];
//# sourceMappingURL=GenerateAffiliateSharingLinkResponseData.js.map