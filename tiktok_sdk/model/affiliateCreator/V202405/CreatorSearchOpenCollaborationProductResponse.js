"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse = void 0;
class AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse = AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse;
AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse.discriminator = undefined;
AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData"
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
//# sourceMappingURL=CreatorSearchOpenCollaborationProductResponse.js.map