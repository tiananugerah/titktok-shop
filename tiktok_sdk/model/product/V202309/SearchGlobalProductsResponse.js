"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchGlobalProductsResponse = void 0;
class Product202309SearchGlobalProductsResponse {
    static getAttributeTypeMap() {
        return Product202309SearchGlobalProductsResponse.attributeTypeMap;
    }
}
exports.Product202309SearchGlobalProductsResponse = Product202309SearchGlobalProductsResponse;
Product202309SearchGlobalProductsResponse.discriminator = undefined;
Product202309SearchGlobalProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309SearchGlobalProductsResponseData"
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
//# sourceMappingURL=SearchGlobalProductsResponse.js.map