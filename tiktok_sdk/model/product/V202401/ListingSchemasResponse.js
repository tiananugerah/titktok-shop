"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202401ListingSchemasResponse = void 0;
class Product202401ListingSchemasResponse {
    static getAttributeTypeMap() {
        return Product202401ListingSchemasResponse.attributeTypeMap;
    }
}
exports.Product202401ListingSchemasResponse = Product202401ListingSchemasResponse;
Product202401ListingSchemasResponse.discriminator = undefined;
Product202401ListingSchemasResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202401ListingSchemasResponseData"
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