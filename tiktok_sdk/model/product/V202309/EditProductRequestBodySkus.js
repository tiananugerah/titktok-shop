"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBodySkus = void 0;
class Product202309EditProductRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBodySkus = Product202309EditProductRequestBodySkus;
Product202309EditProductRequestBodySkus.discriminator = undefined;
Product202309EditProductRequestBodySkus.attributeTypeMap = [
    {
        "name": "combinedSkus",
        "baseName": "combined_skus",
        "type": "Array<Product202309EditProductRequestBodySkusCombinedSkus>"
    },
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202309EditProductRequestBodySkusExternalListPrices>"
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
        "type": "Product202309EditProductRequestBodySkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309EditProductRequestBodySkusInventory>"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202309EditProductRequestBodySkusListPrice"
    },
    {
        "name": "preSale",
        "baseName": "pre_sale",
        "type": "Product202309EditProductRequestBodySkusPreSale"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309EditProductRequestBodySkusPrice"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309EditProductRequestBodySkusSalesAttributes>"
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
//# sourceMappingURL=EditProductRequestBodySkus.js.map