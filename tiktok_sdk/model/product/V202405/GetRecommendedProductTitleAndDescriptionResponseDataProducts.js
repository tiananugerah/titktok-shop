"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts = void 0;
class Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts = Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts;
Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts.discriminator = undefined;
Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "suggestions",
        "baseName": "suggestions",
        "type": "Array<Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions>"
    }
];
//# sourceMappingURL=GetRecommendedProductTitleAndDescriptionResponseDataProducts.js.map