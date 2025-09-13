"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodySkus = void 0;
class Product202309PartialEditProductRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodySkus = Product202309PartialEditProductRequestBodySkus;
Product202309PartialEditProductRequestBodySkus.discriminator = undefined;
Product202309PartialEditProductRequestBodySkus.attributeTypeMap = [
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202309PartialEditProductRequestBodySkusExternalListPrices>"
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
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "identifierCode",
        "baseName": "identifier_code",
        "type": "Product202309PartialEditProductRequestBodySkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309PartialEditProductRequestBodySkusInventory>"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202309PartialEditProductRequestBodySkusListPrice"
    },
    {
        "name": "preSale",
        "baseName": "pre_sale",
        "type": "Product202309PartialEditProductRequestBodySkusPreSale"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309PartialEditProductRequestBodySkusPrice"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309PartialEditProductRequestBodySkusSalesAttributes>"
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
//# sourceMappingURL=PartialEditProductRequestBodySkus.js.map