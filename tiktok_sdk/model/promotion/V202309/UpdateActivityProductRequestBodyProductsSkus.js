"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityProductRequestBodyProductsSkus = void 0;
class Promotion202309UpdateActivityProductRequestBodyProductsSkus {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityProductRequestBodyProductsSkus.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityProductRequestBodyProductsSkus = Promotion202309UpdateActivityProductRequestBodyProductsSkus;
Promotion202309UpdateActivityProductRequestBodyProductsSkus.discriminator = undefined;
Promotion202309UpdateActivityProductRequestBodyProductsSkus.attributeTypeMap = [
    {
        "name": "activityPriceAmount",
        "baseName": "activity_price_amount",
        "type": "string"
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
//# sourceMappingURL=UpdateActivityProductRequestBodyProductsSkus.js.map