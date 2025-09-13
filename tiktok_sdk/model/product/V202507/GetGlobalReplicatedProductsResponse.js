"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507GetGlobalReplicatedProductsResponse = void 0;
class Product202507GetGlobalReplicatedProductsResponse {
    static getAttributeTypeMap() {
        return Product202507GetGlobalReplicatedProductsResponse.attributeTypeMap;
    }
}
exports.Product202507GetGlobalReplicatedProductsResponse = Product202507GetGlobalReplicatedProductsResponse;
Product202507GetGlobalReplicatedProductsResponse.discriminator = undefined;
Product202507GetGlobalReplicatedProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202507GetGlobalReplicatedProductsResponseData"
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
//# sourceMappingURL=GetGlobalReplicatedProductsResponse.js.map