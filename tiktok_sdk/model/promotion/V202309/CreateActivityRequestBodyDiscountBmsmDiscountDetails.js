"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails = void 0;
class Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails = Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails;
Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails.discriminator = undefined;
Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails.attributeTypeMap = [
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
//# sourceMappingURL=CreateActivityRequestBodyDiscountBmsmDiscountDetails.js.map