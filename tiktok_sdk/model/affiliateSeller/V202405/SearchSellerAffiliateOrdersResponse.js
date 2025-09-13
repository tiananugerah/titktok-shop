"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405SearchSellerAffiliateOrdersResponse = void 0;
class AffiliateSeller202405SearchSellerAffiliateOrdersResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202405SearchSellerAffiliateOrdersResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202405SearchSellerAffiliateOrdersResponse = AffiliateSeller202405SearchSellerAffiliateOrdersResponse;
AffiliateSeller202405SearchSellerAffiliateOrdersResponse.discriminator = undefined;
AffiliateSeller202405SearchSellerAffiliateOrdersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202405SearchSellerAffiliateOrdersResponseData"
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
//# sourceMappingURL=SearchSellerAffiliateOrdersResponse.js.map