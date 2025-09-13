"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchProductsResponse = void 0;
class Product202309SearchProductsResponse {
    static getAttributeTypeMap() {
        return Product202309SearchProductsResponse.attributeTypeMap;
    }
}
exports.Product202309SearchProductsResponse = Product202309SearchProductsResponse;
Product202309SearchProductsResponse.discriminator = undefined;
Product202309SearchProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309SearchProductsResponseData"
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
//# sourceMappingURL=SearchProductsResponse.js.map