"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202505CreateImageTranslationTasksResponse = void 0;
class Product202505CreateImageTranslationTasksResponse {
    static getAttributeTypeMap() {
        return Product202505CreateImageTranslationTasksResponse.attributeTypeMap;
    }
}
exports.Product202505CreateImageTranslationTasksResponse = Product202505CreateImageTranslationTasksResponse;
Product202505CreateImageTranslationTasksResponse.discriminator = undefined;
Product202505CreateImageTranslationTasksResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202505CreateImageTranslationTasksResponseData"
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
//# sourceMappingURL=CreateImageTranslationTasksResponse.js.map