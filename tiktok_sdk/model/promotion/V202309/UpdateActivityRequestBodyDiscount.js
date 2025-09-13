"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityRequestBodyDiscount = void 0;
class Promotion202309UpdateActivityRequestBodyDiscount {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityRequestBodyDiscount.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityRequestBodyDiscount = Promotion202309UpdateActivityRequestBodyDiscount;
Promotion202309UpdateActivityRequestBodyDiscount.discriminator = undefined;
Promotion202309UpdateActivityRequestBodyDiscount.attributeTypeMap = [
    {
        "name": "bmsmDiscount",
        "baseName": "bmsm_discount",
        "type": "Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount"
    },
    {
        "name": "giftDiscount",
        "baseName": "gift_discount",
        "type": "Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount"
    },
    {
        "name": "shippingDiscount",
        "baseName": "shipping_discount",
        "type": "Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount"
    }
];
//# sourceMappingURL=UpdateActivityRequestBodyDiscount.js.map