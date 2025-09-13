"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501GenerateAffiliateSharingLinkResponse = void 0;
class AffiliateCreator202501GenerateAffiliateSharingLinkResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202501GenerateAffiliateSharingLinkResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202501GenerateAffiliateSharingLinkResponse = AffiliateCreator202501GenerateAffiliateSharingLinkResponse;
AffiliateCreator202501GenerateAffiliateSharingLinkResponse.discriminator = undefined;
AffiliateCreator202501GenerateAffiliateSharingLinkResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202501GenerateAffiliateSharingLinkResponseData"
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