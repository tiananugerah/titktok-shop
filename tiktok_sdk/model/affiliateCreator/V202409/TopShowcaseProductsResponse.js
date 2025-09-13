"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202409TopShowcaseProductsResponse = void 0;
class AffiliateCreator202409TopShowcaseProductsResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202409TopShowcaseProductsResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202409TopShowcaseProductsResponse = AffiliateCreator202409TopShowcaseProductsResponse;
AffiliateCreator202409TopShowcaseProductsResponse.discriminator = undefined;
AffiliateCreator202409TopShowcaseProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202409TopShowcaseProductsResponseData"
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
//# sourceMappingURL=TopShowcaseProductsResponse.js.map