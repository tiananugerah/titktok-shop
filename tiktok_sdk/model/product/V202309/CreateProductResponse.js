"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductResponse = void 0;
class Product202309CreateProductResponse {
    static getAttributeTypeMap() {
        return Product202309CreateProductResponse.attributeTypeMap;
    }
}
exports.Product202309CreateProductResponse = Product202309CreateProductResponse;
Product202309CreateProductResponse.discriminator = undefined;
Product202309CreateProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309CreateProductResponseData"
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
//# sourceMappingURL=CreateProductResponse.js.map