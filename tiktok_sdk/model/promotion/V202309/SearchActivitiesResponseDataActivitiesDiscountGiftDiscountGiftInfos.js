"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos = void 0;
class Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos {
    static getAttributeTypeMap() {
        return Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos.attributeTypeMap;
    }
}
exports.Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos = Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos;
Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos.discriminator = undefined;
Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos.attributeTypeMap = [
    {
        "name": "giftDetails",
        "baseName": "gift_details",
        "type": "Array<Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfosGiftDetails>"
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
//# sourceMappingURL=SearchActivitiesResponseDataActivitiesDiscountGiftDiscountGiftInfos.js.map