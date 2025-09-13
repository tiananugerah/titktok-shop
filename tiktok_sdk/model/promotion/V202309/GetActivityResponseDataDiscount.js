"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseDataDiscount = void 0;
class Promotion202309GetActivityResponseDataDiscount {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseDataDiscount.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseDataDiscount = Promotion202309GetActivityResponseDataDiscount;
Promotion202309GetActivityResponseDataDiscount.discriminator = undefined;
Promotion202309GetActivityResponseDataDiscount.attributeTypeMap = [
    {
        "name": "bmsmDiscount",
        "baseName": "bmsm_discount",
        "type": "Promotion202309GetActivityResponseDataDiscountBmsmDiscount"
    },
    {
        "name": "giftDiscount",
        "baseName": "gift_discount",
        "type": "Promotion202309GetActivityResponseDataDiscountGiftDiscount"
    },
    {
        "name": "shippingDiscount",
        "baseName": "shipping_discount",
        "type": "Promotion202309GetActivityResponseDataDiscountShippingDiscount"
    }
];
//# sourceMappingURL=GetActivityResponseDataDiscount.js.map