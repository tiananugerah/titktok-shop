"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount = void 0;
class Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount {
    static getAttributeTypeMap() {
        return Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount.attributeTypeMap;
    }
}
exports.Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount = Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount;
Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount.discriminator = undefined;
Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount.attributeTypeMap = [
    {
        "name": "areaScope",
        "baseName": "area_scope",
        "type": "Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope"
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
//# sourceMappingURL=SearchActivitiesResponseDataActivitiesDiscountShippingDiscount.js.map