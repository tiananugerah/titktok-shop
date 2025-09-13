"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406GetCouponResponseDataCoupon = void 0;
class Promotion202406GetCouponResponseDataCoupon {
    static getAttributeTypeMap() {
        return Promotion202406GetCouponResponseDataCoupon.attributeTypeMap;
    }
}
exports.Promotion202406GetCouponResponseDataCoupon = Promotion202406GetCouponResponseDataCoupon;
Promotion202406GetCouponResponseDataCoupon.discriminator = undefined;
Promotion202406GetCouponResponseDataCoupon.attributeTypeMap = [
    {
        "name": "claimDuration",
        "baseName": "claim_duration",
        "type": "Promotion202406GetCouponResponseDataCouponClaimDuration"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "creationSource",
        "baseName": "creation_source",
        "type": "string"
    },
    {
        "name": "discount",
        "baseName": "discount",
        "type": "Promotion202406GetCouponResponseDataCouponDiscount"
    },
    {
        "name": "displayChannels",
        "baseName": "display_channels",
        "type": "Array<string>"
    },
    {
        "name": "displayType",
        "baseName": "display_type",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "liveTasks",
        "baseName": "live_tasks",
        "type": "Array<Promotion202406GetCouponResponseDataCouponLiveTasks>"
    },
    {
        "name": "productIds",
        "baseName": "product_ids",
        "type": "Array<string>"
    },
    {
        "name": "productScope",
        "baseName": "product_scope",
        "type": "string"
    },
    {
        "name": "promoCode",
        "baseName": "promo_code",
        "type": "string"
    },
    {
        "name": "redemptionDuration",
        "baseName": "redemption_duration",
        "type": "Promotion202406GetCouponResponseDataCouponRedemptionDuration"
    },
    {
        "name": "sellerTnc",
        "baseName": "seller_tnc",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "targetBuyerSegment",
        "baseName": "target_buyer_segment",
        "type": "string"
    },
    {
        "name": "threshold",
        "baseName": "threshold",
        "type": "Promotion202406GetCouponResponseDataCouponThreshold"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    },
    {
        "name": "usageLimits",
        "baseName": "usage_limits",
        "type": "Promotion202406GetCouponResponseDataCouponUsageLimits"
    },
    {
        "name": "usageStats",
        "baseName": "usage_stats",
        "type": "Promotion202406GetCouponResponseDataCouponUsageStats"
    }
];
//# sourceMappingURL=GetCouponResponseDataCoupon.js.map