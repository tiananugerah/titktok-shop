"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityRequestBodyDiscount = void 0;
class Promotion202309CreateActivityRequestBodyDiscount {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityRequestBodyDiscount.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityRequestBodyDiscount = Promotion202309CreateActivityRequestBodyDiscount;
Promotion202309CreateActivityRequestBodyDiscount.discriminator = undefined;
Promotion202309CreateActivityRequestBodyDiscount.attributeTypeMap = [
    {
        "name": "bmsmDiscount",
        "baseName": "bmsm_discount",
        "type": "Promotion202309CreateActivityRequestBodyDiscountBmsmDiscount"
    },
    {
        "name": "giftDiscount",
        "baseName": "gift_discount",
        "type": "Promotion202309CreateActivityRequestBodyDiscountGiftDiscount"
    },
    {
        "name": "shippingDiscount",
        "baseName": "shipping_discount",
        "type": "Promotion202309CreateActivityRequestBodyDiscountShippingDiscount"
    }
];
//# sourceMappingURL=CreateActivityRequestBodyDiscount.js.map