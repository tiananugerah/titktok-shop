"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202506GetImageTranslationTasksResponseDataTranslationTasks = void 0;
class Product202506GetImageTranslationTasksResponseDataTranslationTasks {
    static getAttributeTypeMap() {
        return Product202506GetImageTranslationTasksResponseDataTranslationTasks.attributeTypeMap;
    }
}
exports.Product202506GetImageTranslationTasksResponseDataTranslationTasks = Product202506GetImageTranslationTasksResponseDataTranslationTasks;
Product202506GetImageTranslationTasksResponseDataTranslationTasks.discriminator = undefined;
Product202506GetImageTranslationTasksResponseDataTranslationTasks.attributeTypeMap = [
    {
        "name": "failReason",
        "baseName": "fail_reason",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "originalImage",
        "baseName": "original_image",
        "type": "Product202506GetImageTranslationTasksResponseDataTranslationTasksOriginalImage"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "targetLanguage",
        "baseName": "target_language",
        "type": "string"
    },
    {
        "name": "translatedImage",
        "baseName": "translated_image",
        "type": "Product202506GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage"
    }
];
//# sourceMappingURL=GetImageTranslationTasksResponseDataTranslationTasks.js.map