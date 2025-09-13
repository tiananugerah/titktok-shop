"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202505CreatorGenerateGeneralLinkResponse = void 0;
class AffiliateCreator202505CreatorGenerateGeneralLinkResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202505CreatorGenerateGeneralLinkResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202505CreatorGenerateGeneralLinkResponse = AffiliateCreator202505CreatorGenerateGeneralLinkResponse;
AffiliateCreator202505CreatorGenerateGeneralLinkResponse.discriminator = undefined;
AffiliateCreator202505CreatorGenerateGeneralLinkResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202505CreatorGenerateGeneralLinkResponseData"
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
//# sourceMappingURL=CreatorGenerateGeneralLinkResponse.js.map