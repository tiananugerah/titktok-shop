"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseDataProducts = void 0;
class Promotion202309GetActivityResponseDataProducts {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseDataProducts.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseDataProducts = Promotion202309GetActivityResponseDataProducts;
Promotion202309GetActivityResponseDataProducts.discriminator = undefined;
Promotion202309GetActivityResponseDataProducts.attributeTypeMap = [
    {
        "name": "activityPrice",
        "baseName": "activity_price",
        "type": "Promotion202309GetActivityResponseDataProductsActivityPrice"
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
        "type": "Array<Promotion202309GetActivityResponseDataProductsSkus>"
    }
];
//# sourceMappingURL=GetActivityResponseDataProducts.js.map