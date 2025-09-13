"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount = void 0;
class Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount = Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount;
Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount.discriminator = undefined;
Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount.attributeTypeMap = [
    {
        "name": "giftInfos",
        "baseName": "gift_infos",
        "type": "Array<Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos>"
    },
    {
        "name": "giftReceivingType",
        "baseName": "gift_receiving_type",
        "type": "string"
    }
];
//# sourceMappingURL=UpdateActivityRequestBodyDiscountGiftDiscount.js.map