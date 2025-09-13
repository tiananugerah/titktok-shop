"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBodySkus = void 0;
class Product202309CheckProductListingRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBodySkus = Product202309CheckProductListingRequestBodySkus;
Product202309CheckProductListingRequestBodySkus.discriminator = undefined;
Product202309CheckProductListingRequestBodySkus.attributeTypeMap = [
    {
        "name": "combinedSkus",
        "baseName": "combined_skus",
        "type": "Array<Product202309CheckProductListingRequestBodySkusCombinedSkus>"
    },
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202309CheckProductListingRequestBodySkusExternalListPrices>"
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
        "name": "identifierCode",
        "baseName": "identifier_code",
        "type": "Product202309CheckProductListingRequestBodySkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309CheckProductListingRequestBodySkusInventory>"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202309CheckProductListingRequestBodySkusListPrice"
    },
    {
        "name": "preSale",
        "baseName": "pre_sale",
        "type": "Product202309CheckProductListingRequestBodySkusPreSale"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309CheckProductListingRequestBodySkusPrice"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309CheckProductListingRequestBodySkusSalesAttributes>"
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
    }
];
//# sourceMappingURL=CheckProductListingRequestBodySkus.js.map