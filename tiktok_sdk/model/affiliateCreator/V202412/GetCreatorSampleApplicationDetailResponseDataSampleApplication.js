"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication = void 0;
class AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication {
    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication.attributeTypeMap;
    }
}
exports.AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication = AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication;
AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication.discriminator = undefined;
AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication.attributeTypeMap = [
    {
        "name": "activityId",
        "baseName": "activity_id",
        "type": "string"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "creatorFulfillment",
        "baseName": "creator_fulfillment",
        "type": "AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplicationCreatorFulfillment"
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
        "type": "AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplicationSampleProduct"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=GetCreatorSampleApplicationDetailResponseDataSampleApplication.js.map