"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406GetCouponResponseDataCouponRedemptionDuration = void 0;
class Promotion202406GetCouponResponseDataCouponRedemptionDuration {
    static getAttributeTypeMap() {
        return Promotion202406GetCouponResponseDataCouponRedemptionDuration.attributeTypeMap;
    }
}
exports.Promotion202406GetCouponResponseDataCouponRedemptionDuration = Promotion202406GetCouponResponseDataCouponRedemptionDuration;
Promotion202406GetCouponResponseDataCouponRedemptionDuration.discriminator = undefined;
Promotion202406GetCouponResponseDataCouponRedemptionDuration.attributeTypeMap = [
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "number"
    },
    {
        "name": "relativeTime",
        "baseName": "relative_time",
        "type": "number"
    },
    {
        "name": "startTime",
        "baseName": "start_time",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=GetCouponResponseDataCouponRedemptionDuration.js.map