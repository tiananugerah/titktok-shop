"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkusCombinedSkus = void 0;
class Product202309GetProductResponseDataSkusCombinedSkus {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkusCombinedSkus.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkusCombinedSkus = Product202309GetProductResponseDataSkusCombinedSkus;
Product202309GetProductResponseDataSkusCombinedSkus.discriminator = undefined;
Product202309GetProductResponseDataSkusCombinedSkus.attributeTypeMap = [
    {
        "name": "brand",
        "baseName": "brand",
        "type": "Product202309GetProductResponseDataSkusCombinedSkusBrand"
    },
    {
        "name": "categories",
        "baseName": "categories",
        "type": "Array<Product202309GetProductResponseDataSkusCombinedSkusCategories>"
    },
    {
        "name": "combinedListingNotLiveReasons",
        "baseName": "combined_listing_not_live_reasons",
        "type": "Array<string>"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309GetProductResponseDataSkusCombinedSkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309GetProductResponseDataSkusCombinedSkusPrice"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "productMainImage",
        "baseName": "product_main_image",
        "type": "Product202309GetProductResponseDataSkusCombinedSkusProductMainImage"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    },
    {
        "name": "skuCount",
        "baseName": "sku_count",
        "type": "number"
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=GetProductResponseDataSkusCombinedSkus.js.map