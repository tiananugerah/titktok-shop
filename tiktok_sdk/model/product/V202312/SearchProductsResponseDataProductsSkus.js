"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsResponseDataProductsSkus = void 0;
class Product202312SearchProductsResponseDataProductsSkus {
    static getAttributeTypeMap() {
        return Product202312SearchProductsResponseDataProductsSkus.attributeTypeMap;
    }
}
exports.Product202312SearchProductsResponseDataProductsSkus = Product202312SearchProductsResponseDataProductsSkus;
Product202312SearchProductsResponseDataProductsSkus.discriminator = undefined;
Product202312SearchProductsResponseDataProductsSkus.attributeTypeMap = [
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202312SearchProductsResponseDataProductsSkusExternalListPrices>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202312SearchProductsResponseDataProductsSkusInventory>"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202312SearchProductsResponseDataProductsSkusListPrice"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202312SearchProductsResponseDataProductsSkusPrice"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=SearchProductsResponseDataProductsSkus.js.map