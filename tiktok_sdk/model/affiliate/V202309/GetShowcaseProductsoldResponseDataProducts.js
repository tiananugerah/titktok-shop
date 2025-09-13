"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetShowcaseProductsoldResponseDataProducts = void 0;
class Affiliate202309GetShowcaseProductsoldResponseDataProducts {
    static getAttributeTypeMap() {
        return Affiliate202309GetShowcaseProductsoldResponseDataProducts.attributeTypeMap;
    }
}
exports.Affiliate202309GetShowcaseProductsoldResponseDataProducts = Affiliate202309GetShowcaseProductsoldResponseDataProducts;
Affiliate202309GetShowcaseProductsoldResponseDataProducts.discriminator = undefined;
Affiliate202309GetShowcaseProductsoldResponseDataProducts.attributeTypeMap = [
    {
        "name": "addition",
        "baseName": "addition",
        "type": "Affiliate202309GetShowcaseProductsoldResponseDataProductsAddition"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "Affiliate202309GetShowcaseProductsoldResponseDataProductsCommission"
    },
    {
        "name": "detailUrl",
        "baseName": "detail_url",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "mainImages",
        "baseName": "main_images",
        "type": "Array<Affiliate202309GetShowcaseProductsoldResponseDataProductsMainImages>"
    },
    {
        "name": "originalUrl",
        "baseName": "original_url",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice"
    },
    {
        "name": "saleRegions",
        "baseName": "sale_regions",
        "type": "Array<string>"
    },
    {
        "name": "shopName",
        "baseName": "shop_name",
        "type": "string"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Affiliate202309GetShowcaseProductsoldResponseDataProductsStatus"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=GetShowcaseProductsoldResponseDataProducts.js.map