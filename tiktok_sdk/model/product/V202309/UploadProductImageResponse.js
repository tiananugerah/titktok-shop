"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UploadProductImageResponse = void 0;
class Product202309UploadProductImageResponse {
    static getAttributeTypeMap() {
        return Product202309UploadProductImageResponse.attributeTypeMap;
    }
}
exports.Product202309UploadProductImageResponse = Product202309UploadProductImageResponse;
Product202309UploadProductImageResponse.discriminator = undefined;
Product202309UploadProductImageResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309UploadProductImageResponseData"
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
//# sourceMappingURL=UploadProductImageResponse.js.map