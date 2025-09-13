"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData = void 0;
class AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData = AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData;
AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData.discriminator = undefined;
AffiliateCreator202405SearchCreatorTargetCollaborationsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "targetCollaborations",
        "baseName": "target_collaborations",
        "type": "Array<AffiliateCreator202405SearchCreatorTargetCollaborationsResponseDataTargetCollaborations>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCreatorTargetCollaborationsResponseData.js.map