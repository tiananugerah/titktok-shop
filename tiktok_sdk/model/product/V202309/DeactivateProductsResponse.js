"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309DeactivateProductsResponse = void 0;
class Product202309DeactivateProductsResponse {
    static getAttributeTypeMap() {
        return Product202309DeactivateProductsResponse.attributeTypeMap;
    }
}
exports.Product202309DeactivateProductsResponse = Product202309DeactivateProductsResponse;
Product202309DeactivateProductsResponse.discriminator = undefined;
Product202309DeactivateProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309DeactivateProductsResponseData"
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
//# sourceMappingURL=DeactivateProductsResponse.js.map