"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponseDataProductsSkus = void 0;
class Product202502SearchProductsResponseDataProductsSkus {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponseDataProductsSkus.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponseDataProductsSkus = Product202502SearchProductsResponseDataProductsSkus;
Product202502SearchProductsResponseDataProductsSkus.discriminator = undefined;
Product202502SearchProductsResponseDataProductsSkus.attributeTypeMap = [
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202502SearchProductsResponseDataProductsSkusExternalListPrices>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202502SearchProductsResponseDataProductsSkusInventory>"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202502SearchProductsResponseDataProductsSkusListPrice"
    },
    {
        "name": "preSale",
        "baseName": "pre_sale",
        "type": "Product202502SearchProductsResponseDataProductsSkusPreSale"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202502SearchProductsResponseDataProductsSkusPrice"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    },
    {
        "name": "statusInfo",
        "baseName": "status_info",
        "type": "Product202502SearchProductsResponseDataProductsSkusStatusInfo"
    }
];
//# sourceMappingURL=SearchProductsResponseDataProductsSkus.js.map