"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseDataDiscountGiftDiscount = void 0;
class Promotion202309GetActivityResponseDataDiscountGiftDiscount {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseDataDiscountGiftDiscount.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseDataDiscountGiftDiscount = Promotion202309GetActivityResponseDataDiscountGiftDiscount;
Promotion202309GetActivityResponseDataDiscountGiftDiscount.discriminator = undefined;
Promotion202309GetActivityResponseDataDiscountGiftDiscount.attributeTypeMap = [
    {
        "name": "giftInfos",
        "baseName": "gift_infos",
        "type": "Array<Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos>"
    },
    {
        "name": "giftReceivingType",
        "baseName": "gift_receiving_type",
        "type": "string"
    }
];
//# sourceMappingURL=GetActivityResponseDataDiscountGiftDiscount.js.map