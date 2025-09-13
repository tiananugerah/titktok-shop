"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202407ListingSchemasResponse = void 0;
class Product202407ListingSchemasResponse {
    static getAttributeTypeMap() {
        return Product202407ListingSchemasResponse.attributeTypeMap;
    }
}
exports.Product202407ListingSchemasResponse = Product202407ListingSchemasResponse;
Product202407ListingSchemasResponse.discriminator = undefined;
Product202407ListingSchemasResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202407ListingSchemasResponseData"
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
//# sourceMappingURL=ListingSchemasResponse.js.map