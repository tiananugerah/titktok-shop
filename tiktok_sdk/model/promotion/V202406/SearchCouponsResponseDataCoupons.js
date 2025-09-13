"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsResponseDataCoupons = void 0;
class Promotion202406SearchCouponsResponseDataCoupons {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsResponseDataCoupons.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsResponseDataCoupons = Promotion202406SearchCouponsResponseDataCoupons;
Promotion202406SearchCouponsResponseDataCoupons.discriminator = undefined;
Promotion202406SearchCouponsResponseDataCoupons.attributeTypeMap = [
    {
        "name": "claimDuration",
        "baseName": "claim_duration",
        "type": "Promotion202406SearchCouponsResponseDataCouponsClaimDuration"
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
        "type": "Promotion202406SearchCouponsResponseDataCouponsDiscount"
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
        "type": "Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration"
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
        "type": "Promotion202406SearchCouponsResponseDataCouponsThreshold"
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
        "type": "Promotion202406SearchCouponsResponseDataCouponsUsageLimits"
    }
];
//# sourceMappingURL=SearchCouponsResponseDataCoupons.js.map