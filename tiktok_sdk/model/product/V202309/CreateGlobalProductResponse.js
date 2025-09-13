"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductResponse = void 0;
class Product202309CreateGlobalProductResponse {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductResponse.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductResponse = Product202309CreateGlobalProductResponse;
Product202309CreateGlobalProductResponse.discriminator = undefined;
Product202309CreateGlobalProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309CreateGlobalProductResponseData"
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
//# sourceMappingURL=CreateGlobalProductResponse.js.map