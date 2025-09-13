"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductResponse = void 0;
class Product202309EditGlobalProductResponse {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductResponse.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductResponse = Product202309EditGlobalProductResponse;
Product202309EditGlobalProductResponse.discriminator = undefined;
Product202309EditGlobalProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309EditGlobalProductResponseData"
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
//# sourceMappingURL=EditGlobalProductResponse.js.map