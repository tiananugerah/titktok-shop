"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406GetCouponResponseDataCouponThreshold = void 0;
class Promotion202406GetCouponResponseDataCouponThreshold {
    static getAttributeTypeMap() {
        return Promotion202406GetCouponResponseDataCouponThreshold.attributeTypeMap;
    }
}
exports.Promotion202406GetCouponResponseDataCouponThreshold = Promotion202406GetCouponResponseDataCouponThreshold;
Promotion202406GetCouponResponseDataCouponThreshold.discriminator = undefined;
Promotion202406GetCouponResponseDataCouponThreshold.attributeTypeMap = [
    {
        "name": "minSpend",
        "baseName": "min_spend",
        "type": "Promotion202406GetCouponResponseDataCouponThresholdMinSpend"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=GetCouponResponseDataCouponThreshold.js.map