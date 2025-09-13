"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityProductRequestBodyProducts = void 0;
class Promotion202309UpdateActivityProductRequestBodyProducts {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityProductRequestBodyProducts.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityProductRequestBodyProducts = Promotion202309UpdateActivityProductRequestBodyProducts;
Promotion202309UpdateActivityProductRequestBodyProducts.discriminator = undefined;
Promotion202309UpdateActivityProductRequestBodyProducts.attributeTypeMap = [
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
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Promotion202309UpdateActivityProductRequestBodyProductsSkus>"
    }
];
//# sourceMappingURL=UpdateActivityProductRequestBodyProducts.js.map