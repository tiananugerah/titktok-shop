"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202407SearchSizeChartsResponse = void 0;
class Product202407SearchSizeChartsResponse {
    static getAttributeTypeMap() {
        return Product202407SearchSizeChartsResponse.attributeTypeMap;
    }
}
exports.Product202407SearchSizeChartsResponse = Product202407SearchSizeChartsResponse;
Product202407SearchSizeChartsResponse.discriminator = undefined;
Product202407SearchSizeChartsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202407SearchSizeChartsResponseData"
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
//# sourceMappingURL=SearchSizeChartsResponse.js.map