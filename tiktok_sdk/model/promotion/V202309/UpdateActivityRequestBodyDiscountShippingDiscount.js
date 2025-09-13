"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount = void 0;
class Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount = Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount;
Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount.discriminator = undefined;
Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount.attributeTypeMap = [
    {
        "name": "areaScope",
        "baseName": "area_scope",
        "type": "Promotion202309UpdateActivityRequestBodyDiscountShippingDiscountAreaScope"
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
//# sourceMappingURL=UpdateActivityRequestBodyDiscountShippingDiscount.js.map