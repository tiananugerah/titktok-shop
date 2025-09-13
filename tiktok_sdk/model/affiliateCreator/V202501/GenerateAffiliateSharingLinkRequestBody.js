"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody = void 0;
class AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody = AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody;
AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody.discriminator = undefined;
AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody.attributeTypeMap = [
    {
        "name": "channel",
        "baseName": "channel",
        "type": "string"
    },
    {
        "name": "material",
        "baseName": "material",
        "type": "AffiliateCreator202501GenerateAffiliateSharingLinkRequestBodyMaterial"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=GenerateAffiliateSharingLinkRequestBody.js.map