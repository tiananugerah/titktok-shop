"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202407GenerateAffiliateSharingLinkResponse = void 0;
class AffiliateCreator202407GenerateAffiliateSharingLinkResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202407GenerateAffiliateSharingLinkResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202407GenerateAffiliateSharingLinkResponse = AffiliateCreator202407GenerateAffiliateSharingLinkResponse;
AffiliateCreator202407GenerateAffiliateSharingLinkResponse.discriminator = undefined;
AffiliateCreator202407GenerateAffiliateSharingLinkResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202407GenerateAffiliateSharingLinkResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=GenerateAffiliateSharingLinkResponse.js.map