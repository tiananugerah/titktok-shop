"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202409RemoveShowcaseProductsResponse = void 0;
class AffiliateCreator202409RemoveShowcaseProductsResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202409RemoveShowcaseProductsResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202409RemoveShowcaseProductsResponse = AffiliateCreator202409RemoveShowcaseProductsResponse;
AffiliateCreator202409RemoveShowcaseProductsResponse.discriminator = undefined;
AffiliateCreator202409RemoveShowcaseProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202409RemoveShowcaseProductsResponseData"
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
//# sourceMappingURL=RemoveShowcaseProductsResponse.js.map