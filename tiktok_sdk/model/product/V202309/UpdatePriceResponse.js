"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdatePriceResponse = void 0;
class Product202309UpdatePriceResponse {
    static getAttributeTypeMap() {
        return Product202309UpdatePriceResponse.attributeTypeMap;
    }
}
exports.Product202309UpdatePriceResponse = Product202309UpdatePriceResponse;
Product202309UpdatePriceResponse.discriminator = undefined;
Product202309UpdatePriceResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=UpdatePriceResponse.js.map