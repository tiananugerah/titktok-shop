"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductRequestBodySkus = void 0;
class Product202309EditGlobalProductRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductRequestBodySkus = Product202309EditGlobalProductRequestBodySkus;
Product202309EditGlobalProductRequestBodySkus.discriminator = undefined;
Product202309EditGlobalProductRequestBodySkus.attributeTypeMap = [
    {
        "name": "externalGlobalSkuId",
        "baseName": "external_global_sku_id",
        "type": "string"
    },
    {
        "name": "extraIdentifierCodes",
        "baseName": "extra_identifier_codes",
        "type": "Array<string>"
    },
    {
        "name": "globalQuantity",
        "baseName": "global_quantity",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "identifierCode",
        "baseName": "identifier_code",
        "type": "Product202309EditGlobalProductRequestBodySkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309EditGlobalProductRequestBodySkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309EditGlobalProductRequestBodySkusPrice"
    },
    {
        "name": "salePrices",
        "baseName": "sale_prices",
        "type": "Array<Product202309EditGlobalProductRequestBodySkusSalePrices>"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309EditGlobalProductRequestBodySkusSalesAttributes>"
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
//# sourceMappingURL=EditGlobalProductRequestBodySkus.js.map