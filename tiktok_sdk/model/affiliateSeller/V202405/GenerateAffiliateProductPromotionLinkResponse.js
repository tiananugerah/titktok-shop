"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse = void 0;
class AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse = AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse;
AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse.discriminator = undefined;
AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponseData"
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
//# sourceMappingURL=GenerateAffiliateProductPromotionLinkResponse.js.map