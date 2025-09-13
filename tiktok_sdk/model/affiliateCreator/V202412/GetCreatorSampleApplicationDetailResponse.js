"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412GetCreatorSampleApplicationDetailResponse = void 0;
class AffiliateCreator202412GetCreatorSampleApplicationDetailResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorSampleApplicationDetailResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202412GetCreatorSampleApplicationDetailResponse = AffiliateCreator202412GetCreatorSampleApplicationDetailResponse;
AffiliateCreator202412GetCreatorSampleApplicationDetailResponse.discriminator = undefined;
AffiliateCreator202412GetCreatorSampleApplicationDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202412GetCreatorSampleApplicationDetailResponseData"
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
//# sourceMappingURL=GetCreatorSampleApplicationDetailResponse.js.map