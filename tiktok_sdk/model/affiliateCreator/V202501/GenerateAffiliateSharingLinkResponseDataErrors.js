"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors = void 0;
class AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors {
    static getAttributeTypeMap() {
        return AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors.attributeTypeMap;
    }
}
exports.AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors = AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors;
AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors.discriminator = undefined;
AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=GenerateAffiliateSharingLinkResponseDataErrors.js.map