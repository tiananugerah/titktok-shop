"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309SearchActivitiesResponseDataActivitiesDiscount = void 0;
class Promotion202309SearchActivitiesResponseDataActivitiesDiscount {
    static getAttributeTypeMap() {
        return Promotion202309SearchActivitiesResponseDataActivitiesDiscount.attributeTypeMap;
    }
}
exports.Promotion202309SearchActivitiesResponseDataActivitiesDiscount = Promotion202309SearchActivitiesResponseDataActivitiesDiscount;
Promotion202309SearchActivitiesResponseDataActivitiesDiscount.discriminator = undefined;
Promotion202309SearchActivitiesResponseDataActivitiesDiscount.attributeTypeMap = [
    {
        "name": "bmsmDiscount",
        "baseName": "bmsm_discount",
        "type": "Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount"
    },
    {
        "name": "giftDiscount",
        "baseName": "gift_discount",
        "type": "Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscount"
    },
    {
        "name": "shippingDiscount",
        "baseName": "shipping_discount",
        "type": "Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount"
    }
];
//# sourceMappingURL=SearchActivitiesResponseDataActivitiesDiscount.js.map