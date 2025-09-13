"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponse = void 0;
class Product202502SearchProductsResponse {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponse.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponse = Product202502SearchProductsResponse;
Product202502SearchProductsResponse.discriminator = undefined;
Product202502SearchProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202502SearchProductsResponseData"
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