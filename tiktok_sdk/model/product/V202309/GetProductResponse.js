"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponse = void 0;
class Product202309GetProductResponse {
    static getAttributeTypeMap() {
        return Product202309GetProductResponse.attributeTypeMap;
    }
}
exports.Product202309GetProductResponse = Product202309GetProductResponse;
Product202309GetProductResponse.discriminator = undefined;
Product202309GetProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetProductResponseData"
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
//# sourceMappingURL=GetProductResponse.js.map