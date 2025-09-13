"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202505CreateImageTranslationTasksRequestBodyImages = void 0;
class Product202505CreateImageTranslationTasksRequestBodyImages {
    static getAttributeTypeMap() {
        return Product202505CreateImageTranslationTasksRequestBodyImages.attributeTypeMap;
    }
}
exports.Product202505CreateImageTranslationTasksRequestBodyImages = Product202505CreateImageTranslationTasksRequestBodyImages;
Product202505CreateImageTranslationTasksRequestBodyImages.discriminator = undefined;
Product202505CreateImageTranslationTasksRequestBodyImages.attributeTypeMap = [
    {
        "name": "imageUri",
        "baseName": "image_uri",
        "type": "string"
    },
    {
        "name": "targetLanguages",
        "baseName": "target_languages",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=CreateImageTranslationTasksRequestBodyImages.js.map