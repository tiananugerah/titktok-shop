"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410SearchSellerAffiliateOrdersResponse = void 0;
class AffiliateSeller202410SearchSellerAffiliateOrdersResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202410SearchSellerAffiliateOrdersResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202410SearchSellerAffiliateOrdersResponse = AffiliateSeller202410SearchSellerAffiliateOrdersResponse;
AffiliateSeller202410SearchSellerAffiliateOrdersResponse.discriminator = undefined;
AffiliateSeller202410SearchSellerAffiliateOrdersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202410SearchSellerAffiliateOrdersResponseData"
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