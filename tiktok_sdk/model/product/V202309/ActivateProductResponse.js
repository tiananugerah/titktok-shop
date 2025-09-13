"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309ActivateProductResponse = void 0;
class Product202309ActivateProductResponse {
    static getAttributeTypeMap() {
        return Product202309ActivateProductResponse.attributeTypeMap;
    }
}
exports.Product202309ActivateProductResponse = Product202309ActivateProductResponse;
Product202309ActivateProductResponse.discriminator = undefined;
Product202309ActivateProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309ActivateProductResponseData"
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
//# sourceMappingURL=ActivateProductResponse.js.map