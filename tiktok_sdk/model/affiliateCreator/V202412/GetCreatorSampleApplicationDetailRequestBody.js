"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody = void 0;
class AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody = AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody;
AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody.discriminator = undefined;
AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody.attributeTypeMap = [
    {
        "name": "applicationId",
        "baseName": "application_id",
        "type": "string"
    },
    {
        "name": "applicationType",
        "baseName": "application_type",
        "type": "string"
    },
    {
        "name": "mainOrderId",
        "baseName": "main_order_id",
        "type": "string"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetCreatorSampleApplicationDetailRequestBody.js.map