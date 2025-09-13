"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309DeleteProductsResponse = void 0;
class Product202309DeleteProductsResponse {
    static getAttributeTypeMap() {
        return Product202309DeleteProductsResponse.attributeTypeMap;
    }
}
exports.Product202309DeleteProductsResponse = Product202309DeleteProductsResponse;
Product202309DeleteProductsResponse.discriminator = undefined;
Product202309DeleteProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309DeleteProductsResponseData"
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
//# sourceMappingURL=DeleteProductsResponse.js.map