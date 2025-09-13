"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410SearchSellerAffiliateOrdersResponseData = void 0;
class AffiliateSeller202410SearchSellerAffiliateOrdersResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202410SearchSellerAffiliateOrdersResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202410SearchSellerAffiliateOrdersResponseData = AffiliateSeller202410SearchSellerAffiliateOrdersResponseData;
AffiliateSeller202410SearchSellerAffiliateOrdersResponseData.discriminator = undefined;
AffiliateSeller202410SearchSellerAffiliateOrdersResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchSellerAffiliateOrdersResponseData.js.map