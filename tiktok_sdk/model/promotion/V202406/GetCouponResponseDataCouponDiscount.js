"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406GetCouponResponseDataCouponDiscount = void 0;
class Promotion202406GetCouponResponseDataCouponDiscount {
    static getAttributeTypeMap() {
        return Promotion202406GetCouponResponseDataCouponDiscount.attributeTypeMap;
    }
}
exports.Promotion202406GetCouponResponseDataCouponDiscount = Promotion202406GetCouponResponseDataCouponDiscount;
Promotion202406GetCouponResponseDataCouponDiscount.discriminator = undefined;
Promotion202406GetCouponResponseDataCouponDiscount.attributeTypeMap = [
    {
        "name": "maxDiscount",
        "baseName": "max_discount",
        "type": "Promotion202406GetCouponResponseDataCouponDiscountMaxDiscount"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "string"
    },
    {
        "name": "reductionAmount",
        "baseName": "reduction_amount",
        "type": "Promotion202406GetCouponResponseDataCouponDiscountReductionAmount"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=GetCouponResponseDataCouponDiscount.js.map