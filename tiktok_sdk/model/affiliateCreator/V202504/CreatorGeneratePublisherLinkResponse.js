"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202504CreatorGeneratePublisherLinkResponse = void 0;
class AffiliateCreator202504CreatorGeneratePublisherLinkResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202504CreatorGeneratePublisherLinkResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202504CreatorGeneratePublisherLinkResponse = AffiliateCreator202504CreatorGeneratePublisherLinkResponse;
AffiliateCreator202504CreatorGeneratePublisherLinkResponse.discriminator = undefined;
AffiliateCreator202504CreatorGeneratePublisherLinkResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202504CreatorGeneratePublisherLinkResponseData"
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
//# sourceMappingURL=CreatorGeneratePublisherLinkResponse.js.map