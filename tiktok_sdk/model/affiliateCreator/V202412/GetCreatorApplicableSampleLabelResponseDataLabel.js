"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel = void 0;
class AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel {
    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel.attributeTypeMap;
    }
}
exports.AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel = AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel;
AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel.discriminator = undefined;
AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabel.attributeTypeMap = [
    {
        "name": "applicationId",
        "baseName": "application_id",
        "type": "string"
    },
    {
        "name": "canApply",
        "baseName": "can_apply",
        "type": "boolean"
    },
    {
        "name": "reachLimit",
        "baseName": "reach_limit",
        "type": "boolean"
    },
    {
        "name": "sampleProduct",
        "baseName": "sample_product",
        "type": "AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProduct"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=GetCreatorApplicableSampleLabelResponseDataLabel.js.map