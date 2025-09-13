"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsResponse = void 0;
class Product202312SearchProductsResponse {
    static getAttributeTypeMap() {
        return Product202312SearchProductsResponse.attributeTypeMap;
    }
}
exports.Product202312SearchProductsResponse = Product202312SearchProductsResponse;
Product202312SearchProductsResponse.discriminator = undefined;
Product202312SearchProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202312SearchProductsResponseData"
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