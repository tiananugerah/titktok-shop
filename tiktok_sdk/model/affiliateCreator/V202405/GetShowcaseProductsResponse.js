"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405GetShowcaseProductsResponse = void 0;
class AffiliateCreator202405GetShowcaseProductsResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202405GetShowcaseProductsResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202405GetShowcaseProductsResponse = AffiliateCreator202405GetShowcaseProductsResponse;
AffiliateCreator202405GetShowcaseProductsResponse.discriminator = undefined;
AffiliateCreator202405GetShowcaseProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseData"
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
//# sourceMappingURL=GetShowcaseProductsResponse.js.map