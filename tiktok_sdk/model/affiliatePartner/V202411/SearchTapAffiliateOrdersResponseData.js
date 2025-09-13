"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202411SearchTapAffiliateOrdersResponseData = void 0;
class AffiliatePartner202411SearchTapAffiliateOrdersResponseData {
    static getAttributeTypeMap() {
        return AffiliatePartner202411SearchTapAffiliateOrdersResponseData.attributeTypeMap;
    }
}
exports.AffiliatePartner202411SearchTapAffiliateOrdersResponseData = AffiliatePartner202411SearchTapAffiliateOrdersResponseData;
AffiliatePartner202411SearchTapAffiliateOrdersResponseData.discriminator = undefined;
AffiliatePartner202411SearchTapAffiliateOrdersResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchTapAffiliateOrdersResponseData.js.map