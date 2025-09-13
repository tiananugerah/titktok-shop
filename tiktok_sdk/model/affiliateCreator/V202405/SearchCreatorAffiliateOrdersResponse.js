"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405SearchCreatorAffiliateOrdersResponse = void 0;
class AffiliateCreator202405SearchCreatorAffiliateOrdersResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202405SearchCreatorAffiliateOrdersResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202405SearchCreatorAffiliateOrdersResponse = AffiliateCreator202405SearchCreatorAffiliateOrdersResponse;
AffiliateCreator202405SearchCreatorAffiliateOrdersResponse.discriminator = undefined;
AffiliateCreator202405SearchCreatorAffiliateOrdersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData"
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
//# sourceMappingURL=SearchCreatorAffiliateOrdersResponse.js.map