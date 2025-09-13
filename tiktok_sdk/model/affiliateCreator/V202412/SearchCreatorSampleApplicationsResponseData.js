"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412SearchCreatorSampleApplicationsResponseData = void 0;
class AffiliateCreator202412SearchCreatorSampleApplicationsResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202412SearchCreatorSampleApplicationsResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202412SearchCreatorSampleApplicationsResponseData = AffiliateCreator202412SearchCreatorSampleApplicationsResponseData;
AffiliateCreator202412SearchCreatorSampleApplicationsResponseData.discriminator = undefined;
AffiliateCreator202412SearchCreatorSampleApplicationsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "sampleApplications",
        "baseName": "sample_applications",
        "type": "Array<AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications>"
    }
];
//# sourceMappingURL=SearchCreatorSampleApplicationsResponseData.js.map