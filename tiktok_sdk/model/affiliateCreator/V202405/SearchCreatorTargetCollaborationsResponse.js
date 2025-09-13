"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405SearchCreatorTargetCollaborationsResponse = void 0;
class AffiliateCreator202405SearchCreatorTargetCollaborationsResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202405SearchCreatorTargetCollaborationsResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202405SearchCreatorTargetCollaborationsResponse = AffiliateCreator202405SearchCreatorTargetCollaborationsResponse;
AffiliateCreator202405SearchCreatorTargetCollaborationsResponse.discriminator = undefined;
AffiliateCreator202405SearchCreatorTargetCollaborationsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData"
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
//# sourceMappingURL=SearchCreatorTargetCollaborationsResponse.js.map