"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202411SearchTapAffiliateOrdersResponse = void 0;
class AffiliatePartner202411SearchTapAffiliateOrdersResponse {
    static getAttributeTypeMap() {
        return AffiliatePartner202411SearchTapAffiliateOrdersResponse.attributeTypeMap;
    }
}
exports.AffiliatePartner202411SearchTapAffiliateOrdersResponse = AffiliatePartner202411SearchTapAffiliateOrdersResponse;
AffiliatePartner202411SearchTapAffiliateOrdersResponse.discriminator = undefined;
AffiliatePartner202411SearchTapAffiliateOrdersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliatePartner202411SearchTapAffiliateOrdersResponseData"
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
//# sourceMappingURL=SearchTapAffiliateOrdersResponse.js.map