"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdatePriceRequestBodySkus = void 0;
class Product202309UpdatePriceRequestBodySkus {
    static getAttributeTypeMap() {
        return Product202309UpdatePriceRequestBodySkus.attributeTypeMap;
    }
}
exports.Product202309UpdatePriceRequestBodySkus = Product202309UpdatePriceRequestBodySkus;
Product202309UpdatePriceRequestBodySkus.discriminator = undefined;
Product202309UpdatePriceRequestBodySkus.attributeTypeMap = [
    {
        "name": "externalListPrices",
        "baseName": "external_list_prices",
        "type": "Array<Product202309UpdatePriceRequestBodySkusExternalListPrices>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "listPrice",
        "baseName": "list_price",
        "type": "Product202309UpdatePriceRequestBodySkusListPrice"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309UpdatePriceRequestBodySkusPrice"
    }
];
//# sourceMappingURL=UpdatePriceRequestBodySkus.js.map