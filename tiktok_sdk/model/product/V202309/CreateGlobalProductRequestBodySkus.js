"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductRequestBodySkus = void 0;
class Product202309CreateGlobalProductRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductRequestBodySkus = Product202309CreateGlobalProductRequestBodySkus;
Product202309CreateGlobalProductRequestBodySkus.discriminator = undefined;
Product202309CreateGlobalProductRequestBodySkus.attributeTypeMap = [
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
        "name": "identifierCode",
        "baseName": "identifier_code",
        "type": "Product202309CreateGlobalProductRequestBodySkusIdentifierCode"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202309CreateGlobalProductRequestBodySkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309CreateGlobalProductRequestBodySkusPrice"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309CreateGlobalProductRequestBodySkusSalesAttributes>"
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
//# sourceMappingURL=CreateGlobalProductRequestBodySkus.js.map