"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202404OptimizedImagesResponse = void 0;
class Product202404OptimizedImagesResponse {
    static getAttributeTypeMap() {
        return Product202404OptimizedImagesResponse.attributeTypeMap;
    }
}
exports.Product202404OptimizedImagesResponse = Product202404OptimizedImagesResponse;
Product202404OptimizedImagesResponse.discriminator = undefined;
Product202404OptimizedImagesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202404OptimizedImagesResponseData"
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
//# sourceMappingURL=OptimizedImagesResponse.js.map