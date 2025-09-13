"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos = void 0;
class Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos = Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos;
Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos.discriminator = undefined;
Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos.attributeTypeMap = [
    {
        "name": "giftDetails",
        "baseName": "gift_details",
        "type": "Array<Promotion202309UpdateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails>"
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
//# sourceMappingURL=UpdateActivityRequestBodyDiscountGiftDiscountGiftInfos.js.map