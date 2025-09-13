"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501CreatorSelectAffiliateProductResponse = void 0;
class AffiliateCreator202501CreatorSelectAffiliateProductResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202501CreatorSelectAffiliateProductResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202501CreatorSelectAffiliateProductResponse = AffiliateCreator202501CreatorSelectAffiliateProductResponse;
AffiliateCreator202501CreatorSelectAffiliateProductResponse.discriminator = undefined;
AffiliateCreator202501CreatorSelectAffiliateProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseData"
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
//# sourceMappingURL=CreatorSelectAffiliateProductResponse.js.map