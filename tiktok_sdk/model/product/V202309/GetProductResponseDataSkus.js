"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSkus = void 0;
class Product202309GetProductResponseDataSkus {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSkus.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSkus = Product202309GetProductResponseDataSkus;
Product202309GetProductResponseDataSkus.discriminator = undefined;
Product202309GetProductResponseDataSkus.attributeTypeMap = [
    {
        "name": "combinedSkus",
        "baseName": "combined_skus",
        "type": "Array<Product202309GetProductResponseDataSkusCombinedSkus>"
    },
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202309GetProductResponseDataSkusExternalListPrices>"
    },
    {
        "name": "externalSkuId",
        "baseName": "external_sku_id",
        "type": "string"
    },
    {
        "name": "externalUrls",
        "baseName": "external_urls",
        "type": "Array<string>"
    },
    {
        "name": "extraIdentifierCodes",
        "baseName": "extra_identifier_codes",
        "type": "Array<string>"
    },
    {
        "name": "globalListingPolicy",
        "baseName": "global_listing_policy",
        "type": "Product202309GetProductResponseDataSkusGlobalListingPolicy"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "identifierCode",
        "baseName": "identifier_code",
        "type": "Product202309GetProductResponseDataSkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309GetProductResponseDataSkusInventory>"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202309GetProductResponseDataSkusListPrice"
    },
    {
        "name": "preSale",
        "baseName": "pre_sale",
        "type": "Product202309GetProductResponseDataSkusPreSale"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309GetProductResponseDataSkusPrice"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309GetProductResponseDataSkusSalesAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    },
    {
        "name": "skuUnitCount",
        "baseName": "sku_unit_count",
        "type": "string"
    },
    {
        "name": "statusInfo",
        "baseName": "status_info",
        "type": "Product202309GetProductResponseDataSkusStatusInfo"
    }
];
//# sourceMappingURL=GetProductResponseDataSkus.js.map