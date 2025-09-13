"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData = void 0;
class AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData = AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData.discriminator = undefined;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=CreatorSearchAffiliateTraceOrdersResponseData.js.map