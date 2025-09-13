"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductResponse = void 0;
class Product202309PartialEditProductResponse {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductResponse.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductResponse = Product202309PartialEditProductResponse;
Product202309PartialEditProductResponse.discriminator = undefined;
Product202309PartialEditProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309PartialEditProductResponseData"
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
//# sourceMappingURL=PartialEditProductResponse.js.map