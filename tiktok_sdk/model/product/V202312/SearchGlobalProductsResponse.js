"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchGlobalProductsResponse = void 0;
class Product202312SearchGlobalProductsResponse {
    static getAttributeTypeMap() {
        return Product202312SearchGlobalProductsResponse.attributeTypeMap;
    }
}
exports.Product202312SearchGlobalProductsResponse = Product202312SearchGlobalProductsResponse;
Product202312SearchGlobalProductsResponse.discriminator = undefined;
Product202312SearchGlobalProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202312SearchGlobalProductsResponseData"
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