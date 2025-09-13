"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202405GetProductsSEOWordsResponse = void 0;
class Product202405GetProductsSEOWordsResponse {
    static getAttributeTypeMap() {
        return Product202405GetProductsSEOWordsResponse.attributeTypeMap;
    }
}
exports.Product202405GetProductsSEOWordsResponse = Product202405GetProductsSEOWordsResponse;
Product202405GetProductsSEOWordsResponse.discriminator = undefined;
Product202405GetProductsSEOWordsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202405GetProductsSEOWordsResponseData"
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
//# sourceMappingURL=GetProductsSEOWordsResponse.js.map