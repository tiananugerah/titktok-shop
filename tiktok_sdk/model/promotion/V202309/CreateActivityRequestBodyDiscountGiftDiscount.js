"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityRequestBodyDiscountGiftDiscount = void 0;
class Promotion202309CreateActivityRequestBodyDiscountGiftDiscount {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityRequestBodyDiscountGiftDiscount.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityRequestBodyDiscountGiftDiscount = Promotion202309CreateActivityRequestBodyDiscountGiftDiscount;
Promotion202309CreateActivityRequestBodyDiscountGiftDiscount.discriminator = undefined;
Promotion202309CreateActivityRequestBodyDiscountGiftDiscount.attributeTypeMap = [
    {
        "name": "giftInfos",
        "baseName": "gift_infos",
        "type": "Array<Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos>"
    },
    {
        "name": "giftReceivingType",
        "baseName": "gift_receiving_type",
        "type": "string"
    }
];
//# sourceMappingURL=CreateActivityRequestBodyDiscountGiftDiscount.js.map