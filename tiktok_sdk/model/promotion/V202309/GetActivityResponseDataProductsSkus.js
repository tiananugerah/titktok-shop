"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseDataProductsSkus = void 0;
class Promotion202309GetActivityResponseDataProductsSkus {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseDataProductsSkus.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseDataProductsSkus = Promotion202309GetActivityResponseDataProductsSkus;
Promotion202309GetActivityResponseDataProductsSkus.discriminator = undefined;
Promotion202309GetActivityResponseDataProductsSkus.attributeTypeMap = [
    {
        "name": "activityPrice",
        "baseName": "activity_price",
        "type": "Promotion202309GetActivityResponseDataProductsSkusActivityPrice"
    },
    {
        "name": "discount",
        "baseName": "discount",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "quantityLimit",
        "baseName": "quantity_limit",
        "type": "number"
    },
    {
        "name": "quantityPerUser",
        "baseName": "quantity_per_user",
        "type": "number"
    }
];
//# sourceMappingURL=GetActivityResponseDataProductsSkus.js.map