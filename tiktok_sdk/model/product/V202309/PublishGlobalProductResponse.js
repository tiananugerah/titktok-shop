"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PublishGlobalProductResponse = void 0;
class Product202309PublishGlobalProductResponse {
    static getAttributeTypeMap() {
        return Product202309PublishGlobalProductResponse.attributeTypeMap;
    }
}
exports.Product202309PublishGlobalProductResponse = Product202309PublishGlobalProductResponse;
Product202309PublishGlobalProductResponse.discriminator = undefined;
Product202309PublishGlobalProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309PublishGlobalProductResponseData"
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
//# sourceMappingURL=PublishGlobalProductResponse.js.map