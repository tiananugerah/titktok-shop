"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse = void 0;
class AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse = AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse.discriminator = undefined;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData"
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
//# sourceMappingURL=CreatorSearchAffiliateTraceOrdersResponse.js.map