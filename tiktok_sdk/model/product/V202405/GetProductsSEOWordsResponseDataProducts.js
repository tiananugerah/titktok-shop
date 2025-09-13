"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202405GetProductsSEOWordsResponseDataProducts = void 0;
class Product202405GetProductsSEOWordsResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202405GetProductsSEOWordsResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202405GetProductsSEOWordsResponseDataProducts = Product202405GetProductsSEOWordsResponseDataProducts;
Product202405GetProductsSEOWordsResponseDataProducts.discriminator = undefined;
Product202405GetProductsSEOWordsResponseDataProducts.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "seoWords",
        "baseName": "seo_words",
        "type": "Array<Product202405GetProductsSEOWordsResponseDataProductsSeoWords>"
    }
];
//# sourceMappingURL=GetProductsSEOWordsResponseDataProducts.js.map