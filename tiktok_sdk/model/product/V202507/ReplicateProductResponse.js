"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507ReplicateProductResponse = void 0;
class Product202507ReplicateProductResponse {
    static getAttributeTypeMap() {
        return Product202507ReplicateProductResponse.attributeTypeMap;
    }
}
exports.Product202507ReplicateProductResponse = Product202507ReplicateProductResponse;
Product202507ReplicateProductResponse.discriminator = undefined;
Product202507ReplicateProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202507ReplicateProductResponseData"
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
//# sourceMappingURL=ReplicateProductResponse.js.map