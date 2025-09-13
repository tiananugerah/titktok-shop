"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductRequestBodySkus = void 0;
class Product202309CreateProductRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309CreateProductRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309CreateProductRequestBodySkus = Product202309CreateProductRequestBodySkus;
Product202309CreateProductRequestBodySkus.discriminator = undefined;
Product202309CreateProductRequestBodySkus.attributeTypeMap = [
    {
        "name": "combinedSkus",
        "baseName": "combined_skus",
        "type": "Array<Product202309CreateProductRequestBodySkusCombinedSkus>"
    },
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202309CreateProductRequestBodySkusExternalListPrices>"
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
        "type": "Product202309CreateProductRequestBodySkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309CreateProductRequestBodySkusInventory>"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202309CreateProductRequestBodySkusListPrice"
    },
    {
        "name": "preSale",
        "baseName": "pre_sale",
        "type": "Product202309CreateProductRequestBodySkusPreSale"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309CreateProductRequestBodySkusPrice"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309CreateProductRequestBodySkusSalesAttributes>"
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
//# sourceMappingURL=CreateProductRequestBodySkus.js.map