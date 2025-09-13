"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalAttributesResponse = void 0;
class Product202309GetGlobalAttributesResponse {
    static getAttributeTypeMap() {
        return Product202309GetGlobalAttributesResponse.attributeTypeMap;
    }
}
exports.Product202309GetGlobalAttributesResponse = Product202309GetGlobalAttributesResponse;
Product202309GetGlobalAttributesResponse.discriminator = undefined;
Product202309GetGlobalAttributesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetGlobalAttributesResponseData"
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
//# sourceMappingURL=GetGlobalAttributesResponse.js.map