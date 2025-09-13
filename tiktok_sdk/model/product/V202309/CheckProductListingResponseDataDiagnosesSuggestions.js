"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingResponseDataDiagnosesSuggestions = void 0;
class Product202309CheckProductListingResponseDataDiagnosesSuggestions {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingResponseDataDiagnosesSuggestions.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingResponseDataDiagnosesSuggestions = Product202309CheckProductListingResponseDataDiagnosesSuggestions;
Product202309CheckProductListingResponseDataDiagnosesSuggestions.discriminator = undefined;
Product202309CheckProductListingResponseDataDiagnosesSuggestions.attributeTypeMap = [
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309CheckProductListingResponseDataDiagnosesSuggestionsImages>"
    },
    {
        "name": "seoWords",
        "baseName": "seo_words",
        "type": "Array<Product202309CheckProductListingResponseDataDiagnosesSuggestionsSeoWords>"
    },
    {
        "name": "smartTexts",
        "baseName": "smart_texts",
        "type": "Array<Product202309CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts>"
    }
];
//# sourceMappingURL=CheckProductListingResponseDataDiagnosesSuggestions.js.map