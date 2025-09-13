"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails = void 0;
class Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails = Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails;
Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails.discriminator = undefined;
Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails.attributeTypeMap = [
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
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
//# sourceMappingURL=GetActivityResponseDataDiscountBmsmDiscountDetails.js.map