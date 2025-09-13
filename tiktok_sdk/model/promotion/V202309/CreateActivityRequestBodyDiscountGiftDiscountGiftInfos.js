"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos = void 0;
class Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos = Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos;
Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos.discriminator = undefined;
Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfos.attributeTypeMap = [
    {
        "name": "giftDetails",
        "baseName": "gift_details",
        "type": "Array<Promotion202309CreateActivityRequestBodyDiscountGiftDiscountGiftInfosGiftDetails>"
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
//# sourceMappingURL=CreateActivityRequestBodyDiscountGiftDiscountGiftInfos.js.map