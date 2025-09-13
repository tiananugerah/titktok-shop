"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponseDataProductsSkusPreSale = void 0;
class Product202502SearchProductsResponseDataProductsSkusPreSale {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponseDataProductsSkusPreSale.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponseDataProductsSkusPreSale = Product202502SearchProductsResponseDataProductsSkusPreSale;
Product202502SearchProductsResponseDataProductsSkusPreSale.discriminator = undefined;
Product202502SearchProductsResponseDataProductsSkusPreSale.attributeTypeMap = [
    {
        "name": "fulfillmentType",
        "baseName": "fulfillment_type",
        "type": "Product202502SearchProductsResponseDataProductsSkusPreSaleFulfillmentType"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=SearchProductsResponseDataProductsSkusPreSale.js.map