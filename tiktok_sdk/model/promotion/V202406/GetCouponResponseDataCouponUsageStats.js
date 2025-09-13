"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406GetCouponResponseDataCouponUsageStats = void 0;
class Promotion202406GetCouponResponseDataCouponUsageStats {
    static getAttributeTypeMap() {
        return Promotion202406GetCouponResponseDataCouponUsageStats.attributeTypeMap;
    }
}
exports.Promotion202406GetCouponResponseDataCouponUsageStats = Promotion202406GetCouponResponseDataCouponUsageStats;
Promotion202406GetCouponResponseDataCouponUsageStats.discriminator = undefined;
Promotion202406GetCouponResponseDataCouponUsageStats.attributeTypeMap = [
    {
        "name": "claimedCount",
        "baseName": "claimed_count",
        "type": "number"
    },
    {
        "name": "redeemedCount",
        "baseName": "redeemed_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetCouponResponseDataCouponUsageStats.js.map