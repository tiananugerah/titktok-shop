"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsResponseDataCouponsUsageLimits = void 0;
class Promotion202406SearchCouponsResponseDataCouponsUsageLimits {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsResponseDataCouponsUsageLimits.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsResponseDataCouponsUsageLimits = Promotion202406SearchCouponsResponseDataCouponsUsageLimits;
Promotion202406SearchCouponsResponseDataCouponsUsageLimits.discriminator = undefined;
Promotion202406SearchCouponsResponseDataCouponsUsageLimits.attributeTypeMap = [
    {
        "name": "redemptionLimit",
        "baseName": "redemption_limit",
        "type": "number"
    },
    {
        "name": "singleBuyerClaimLimit",
        "baseName": "single_buyer_claim_limit",
        "type": "number"
    },
    {
        "name": "totalClaimLimit",
        "baseName": "total_claim_limit",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCouponsResponseDataCouponsUsageLimits.js.map