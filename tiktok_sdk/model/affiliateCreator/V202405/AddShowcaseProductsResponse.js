"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405AddShowcaseProductsResponse = void 0;
class AffiliateCreator202405AddShowcaseProductsResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202405AddShowcaseProductsResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202405AddShowcaseProductsResponse = AffiliateCreator202405AddShowcaseProductsResponse;
AffiliateCreator202405AddShowcaseProductsResponse.discriminator = undefined;
AffiliateCreator202405AddShowcaseProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202405AddShowcaseProductsResponseData"
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
//# sourceMappingURL=AddShowcaseProductsResponse.js.map