"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405SearchSellerAffiliateOrdersResponseData = void 0;
class AffiliateSeller202405SearchSellerAffiliateOrdersResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202405SearchSellerAffiliateOrdersResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202405SearchSellerAffiliateOrdersResponseData = AffiliateSeller202405SearchSellerAffiliateOrdersResponseData;
AffiliateSeller202405SearchSellerAffiliateOrdersResponseData.discriminator = undefined;
AffiliateSeller202405SearchSellerAffiliateOrdersResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<AffiliateSeller202405SearchSellerAffiliateOrdersResponseDataOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchSellerAffiliateOrdersResponseData.js.map