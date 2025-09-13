"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos = void 0;
class Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos = Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos;
Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos.discriminator = undefined;
Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfos.attributeTypeMap = [
    {
        "name": "giftDetails",
        "baseName": "gift_details",
        "type": "Array<Promotion202309GetActivityResponseDataDiscountGiftDiscountGiftInfosGiftDetails>"
    },
    {
        "name": "thresholdType",
        "baseName": "threshold_type",
        "type": "string"
    },
    {
        "name": "thresholdValue",
        "baseName": "threshold_value",
        "type": "string"
    },
    {
        "name": "tier",
        "baseName": "tier",
        "type": "number"
    }
];
//# sourceMappingURL=GetActivityResponseDataDiscountGiftDiscountGiftInfos.js.map