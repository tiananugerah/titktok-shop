"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData = void 0;
class AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData = AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData;
AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData.discriminator = undefined;
AffiliateCreator202410SearchCreatorAffiliateOrdersResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCreatorAffiliateOrdersResponseData.js.map