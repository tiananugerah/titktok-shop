"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UploadProductFileResponse = void 0;
class Product202309UploadProductFileResponse {
    static getAttributeTypeMap() {
        return Product202309UploadProductFileResponse.attributeTypeMap;
    }
}
exports.Product202309UploadProductFileResponse = Product202309UploadProductFileResponse;
Product202309UploadProductFileResponse.discriminator = undefined;
Product202309UploadProductFileResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309UploadProductFileResponseData"
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
//# sourceMappingURL=UploadProductFileResponse.js.map