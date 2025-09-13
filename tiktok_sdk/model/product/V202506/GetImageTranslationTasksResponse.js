"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202506GetImageTranslationTasksResponse = void 0;
class Product202506GetImageTranslationTasksResponse {
    static getAttributeTypeMap() {
        return Product202506GetImageTranslationTasksResponse.attributeTypeMap;
    }
}
exports.Product202506GetImageTranslationTasksResponse = Product202506GetImageTranslationTasksResponse;
Product202506GetImageTranslationTasksResponse.discriminator = undefined;
Product202506GetImageTranslationTasksResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202506GetImageTranslationTasksResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetImageTranslationTasksResponse.js.map