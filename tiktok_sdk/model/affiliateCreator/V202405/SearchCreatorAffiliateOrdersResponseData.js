"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData = void 0;
class AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData = AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData;
AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData.discriminator = undefined;
AffiliateCreator202405SearchCreatorAffiliateOrdersResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<AffiliateCreator202405SearchCreatorAffiliateOrdersResponseDataOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCreatorAffiliateOrdersResponseData.js.map