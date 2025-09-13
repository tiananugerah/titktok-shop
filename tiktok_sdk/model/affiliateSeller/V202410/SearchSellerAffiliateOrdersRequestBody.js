"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody = void 0;
class AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody = AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody;
AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody.discriminator = undefined;
AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody.attributeTypeMap = [
    {
        "name": "createTimeGe",
        "baseName": "create_time_ge",
        "type": "number"
    },
    {
        "name": "createTimeLt",
        "baseName": "create_time_lt",
        "type": "number"
    },
    {
        "name": "programId",
        "baseName": "program_id",
        "type": "string"
    }
];
//# sourceMappingURL=SearchSellerAffiliateOrdersRequestBody.js.map