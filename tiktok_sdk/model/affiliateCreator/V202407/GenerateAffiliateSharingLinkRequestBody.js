"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody = void 0;
class AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody = AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody;
AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody.discriminator = undefined;
AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody.attributeTypeMap = [
    {
        "name": "channel",
        "baseName": "channel",
        "type": "string"
    },
    {
        "name": "material",
        "baseName": "material",
        "type": "AffiliateCreator202407GenerateAffiliateSharingLinkRequestBodyMaterial"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=GenerateAffiliateSharingLinkRequestBody.js.map