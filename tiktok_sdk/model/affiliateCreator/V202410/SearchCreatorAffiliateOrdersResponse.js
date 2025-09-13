"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202410SearchCreatorAffiliateOrdersResponse = void 0;
class AffiliateCreator202410SearchCreatorAffiliateOrdersResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202410SearchCreatorAffiliateOrdersResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202410SearchCreatorAffiliateOrdersResponse = AffiliateCreator202410SearchCreatorAffiliateOrdersResponse;
AffiliateCreator202410SearchCreatorAffiliateOrdersResponse.discriminator = undefined;
AffiliateCreator202410SearchCreatorAffiliateOrdersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData"
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