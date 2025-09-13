"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412SearchCreatorSampleApplicationsResponse = void 0;
class AffiliateCreator202412SearchCreatorSampleApplicationsResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202412SearchCreatorSampleApplicationsResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202412SearchCreatorSampleApplicationsResponse = AffiliateCreator202412SearchCreatorSampleApplicationsResponse;
AffiliateCreator202412SearchCreatorSampleApplicationsResponse.discriminator = undefined;
AffiliateCreator202412SearchCreatorSampleApplicationsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202412SearchCreatorSampleApplicationsResponseData"
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
//# sourceMappingURL=SearchCreatorSampleApplicationsResponse.js.map