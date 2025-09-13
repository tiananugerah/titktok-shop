"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseDataDiscountShippingDiscount = void 0;
class Promotion202309GetActivityResponseDataDiscountShippingDiscount {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseDataDiscountShippingDiscount.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseDataDiscountShippingDiscount = Promotion202309GetActivityResponseDataDiscountShippingDiscount;
Promotion202309GetActivityResponseDataDiscountShippingDiscount.discriminator = undefined;
Promotion202309GetActivityResponseDataDiscountShippingDiscount.attributeTypeMap = [
    {
        "name": "areaScope",
        "baseName": "area_scope",
        "type": "Promotion202309GetActivityResponseDataDiscountShippingDiscountAreaScope"
    },
    {
        "name": "inventoryType",
        "baseName": "inventory_type",
        "type": "string"
    },
    {
        "name": "shippingMethod",
        "baseName": "shipping_method",
        "type": "string"
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
//# sourceMappingURL=GetActivityResponseDataDiscountShippingDiscount.js.map