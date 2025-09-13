"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponse = void 0;
class Product202309GetGlobalProductResponse {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponse.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponse = Product202309GetGlobalProductResponse;
Product202309GetGlobalProductResponse.discriminator = undefined;
Product202309GetGlobalProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetGlobalProductResponseData"
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
//# sourceMappingURL=GetGlobalProductResponse.js.map