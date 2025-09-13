"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412GetCreatorApplicableSampleLabelResponse = void 0;
class AffiliateCreator202412GetCreatorApplicableSampleLabelResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorApplicableSampleLabelResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202412GetCreatorApplicableSampleLabelResponse = AffiliateCreator202412GetCreatorApplicableSampleLabelResponse;
AffiliateCreator202412GetCreatorApplicableSampleLabelResponse.discriminator = undefined;
AffiliateCreator202412GetCreatorApplicableSampleLabelResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202412GetCreatorApplicableSampleLabelResponseData"
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
//# sourceMappingURL=GetCreatorApplicableSampleLabelResponse.js.map