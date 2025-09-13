"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications = void 0;
class AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications {
    static getAttributeTypeMap() {
        return AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications.attributeTypeMap;
    }
}
exports.AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications = AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications;
AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications.discriminator = undefined;
AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplications.attributeTypeMap = [
    {
        "name": "activityId",
        "baseName": "activity_id",
        "type": "string"
    },
    {
        "name": "creatorFulfillment",
        "baseName": "creator_fulfillment",
        "type": "AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplicationsCreatorFulfillment"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "mainOrderId",
        "baseName": "main_order_id",
        "type": "string"
    },
    {
        "name": "sampleProduct",
        "baseName": "sample_product",
        "type": "AffiliateCreator202412SearchCreatorSampleApplicationsResponseDataSampleApplicationsSampleProduct"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchCreatorSampleApplicationsResponseDataSampleApplications.js.map