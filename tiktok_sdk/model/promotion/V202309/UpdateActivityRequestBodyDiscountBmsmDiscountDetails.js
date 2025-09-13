"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails = void 0;
class Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails = Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails;
Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails.discriminator = undefined;
Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails.attributeTypeMap = [
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
//# sourceMappingURL=UpdateActivityRequestBodyDiscountBmsmDiscountDetails.js.map