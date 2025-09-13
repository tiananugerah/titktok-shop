"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors = void 0;
class AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors {
    static getAttributeTypeMap() {
        return AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors.attributeTypeMap;
    }
}
exports.AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors = AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors;
AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors.discriminator = undefined;
AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=GenerateAffiliateSharingLinkResponseDataErrors.js.map