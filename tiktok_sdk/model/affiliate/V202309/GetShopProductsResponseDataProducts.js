"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetShopProductsResponseDataProducts = void 0;
class Affiliate202309GetShopProductsResponseDataProducts {
    static getAttributeTypeMap() {
        return Affiliate202309GetShopProductsResponseDataProducts.attributeTypeMap;
    }
}
exports.Affiliate202309GetShopProductsResponseDataProducts = Affiliate202309GetShopProductsResponseDataProducts;
Affiliate202309GetShopProductsResponseDataProducts.discriminator = undefined;
Affiliate202309GetShopProductsResponseDataProducts.attributeTypeMap = [
    {
        "name": "addedStatus",
        "baseName": "added_status",
        "type": "string"
    },
    {
        "name": "brandName",
        "baseName": "brand_name",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Affiliate202309GetShopProductsResponseDataProductsImages>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Affiliate202309GetShopProductsResponseDataProductsPrice"
    },
    {
        "name": "salesCount",
        "baseName": "sales_count",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=GetShopProductsResponseDataProducts.js.map