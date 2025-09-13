"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406GetCouponResponseDataCouponUsageLimits = void 0;
class Promotion202406GetCouponResponseDataCouponUsageLimits {
    static getAttributeTypeMap() {
        return Promotion202406GetCouponResponseDataCouponUsageLimits.attributeTypeMap;
    }
}
exports.Promotion202406GetCouponResponseDataCouponUsageLimits = Promotion202406GetCouponResponseDataCouponUsageLimits;
Promotion202406GetCouponResponseDataCouponUsageLimits.discriminator = undefined;
Promotion202406GetCouponResponseDataCouponUsageLimits.attributeTypeMap = [
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
//# sourceMappingURL=GetCouponResponseDataCouponUsageLimits.js.map