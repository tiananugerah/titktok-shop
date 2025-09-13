"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductResponse = void 0;
class Product202309EditProductResponse {
    static getAttributeTypeMap() {
        return Product202309EditProductResponse.attributeTypeMap;
    }
}
exports.Product202309EditProductResponse = Product202309EditProductResponse;
Product202309EditProductResponse.discriminator = undefined;
Product202309EditProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309EditProductResponseData"
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
//# sourceMappingURL=EditProductResponse.js.map