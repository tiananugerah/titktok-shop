"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309DeleteGlobalProductsResponse = void 0;
class Product202309DeleteGlobalProductsResponse {
    static getAttributeTypeMap() {
        return Product202309DeleteGlobalProductsResponse.attributeTypeMap;
    }
}
exports.Product202309DeleteGlobalProductsResponse = Product202309DeleteGlobalProductsResponse;
Product202309DeleteGlobalProductsResponse.discriminator = undefined;
Product202309DeleteGlobalProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309DeleteGlobalProductsResponseData"
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
//# sourceMappingURL=DeleteGlobalProductsResponse.js.map