"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetAttributesResponse = void 0;
class Product202309GetAttributesResponse {
    static getAttributeTypeMap() {
        return Product202309GetAttributesResponse.attributeTypeMap;
    }
}
exports.Product202309GetAttributesResponse = Product202309GetAttributesResponse;
Product202309GetAttributesResponse.discriminator = undefined;
Product202309GetAttributesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetAttributesResponseData"
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
//# sourceMappingURL=GetAttributesResponse.js.map