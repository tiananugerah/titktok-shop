"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405GetCreatorProfileResponse = void 0;
class AffiliateCreator202405GetCreatorProfileResponse {
    static getAttributeTypeMap() {
        return AffiliateCreator202405GetCreatorProfileResponse.attributeTypeMap;
    }
}
exports.AffiliateCreator202405GetCreatorProfileResponse = AffiliateCreator202405GetCreatorProfileResponse;
AffiliateCreator202405GetCreatorProfileResponse.discriminator = undefined;
AffiliateCreator202405GetCreatorProfileResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateCreator202405GetCreatorProfileResponseData"
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
//# sourceMappingURL=GetCreatorProfileResponse.js.map