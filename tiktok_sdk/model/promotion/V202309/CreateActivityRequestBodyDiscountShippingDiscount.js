"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityRequestBodyDiscountShippingDiscount = void 0;
class Promotion202309CreateActivityRequestBodyDiscountShippingDiscount {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityRequestBodyDiscountShippingDiscount.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityRequestBodyDiscountShippingDiscount = Promotion202309CreateActivityRequestBodyDiscountShippingDiscount;
Promotion202309CreateActivityRequestBodyDiscountShippingDiscount.discriminator = undefined;
Promotion202309CreateActivityRequestBodyDiscountShippingDiscount.attributeTypeMap = [
    {
        "name": "areaScope",
        "baseName": "area_scope",
        "type": "Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope"
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
//# sourceMappingURL=CreateActivityRequestBodyDiscountShippingDiscount.js.map