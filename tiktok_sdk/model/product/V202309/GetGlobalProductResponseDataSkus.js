"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponseDataSkus = void 0;
class Product202309GetGlobalProductResponseDataSkus {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponseDataSkus.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponseDataSkus = Product202309GetGlobalProductResponseDataSkus;
Product202309GetGlobalProductResponseDataSkus.discriminator = undefined;
Product202309GetGlobalProductResponseDataSkus.attributeTypeMap = [
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
        "type": "Product202309GetGlobalProductResponseDataSkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309GetGlobalProductResponseDataSkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309GetGlobalProductResponseDataSkusPrice"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309GetGlobalProductResponseDataSkusSalesAttributes>"
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
//# sourceMappingURL=GetGlobalProductResponseDataSkus.js.map