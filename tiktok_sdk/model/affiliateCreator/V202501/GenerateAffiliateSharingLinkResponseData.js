"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501GenerateAffiliateSharingLinkResponseData = void 0;
class AffiliateCreator202501GenerateAffiliateSharingLinkResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202501GenerateAffiliateSharingLinkResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202501GenerateAffiliateSharingLinkResponseData = AffiliateCreator202501GenerateAffiliateSharingLinkResponseData;
AffiliateCreator202501GenerateAffiliateSharingLinkResponseData.discriminator = undefined;
AffiliateCreator202501GenerateAffiliateSharingLinkResponseData.attributeTypeMap = [
    {
        "name": "affiliateSharingLinks",
        "baseName": "affiliate_sharing_links",
        "type": "Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks>"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors>"
    }
];
//# sourceMappingURL=GenerateAffiliateSharingLinkResponseData.js.map