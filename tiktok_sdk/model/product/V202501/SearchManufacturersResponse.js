"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202501SearchManufacturersResponse = void 0;
class Product202501SearchManufacturersResponse {
    static getAttributeTypeMap() {
        return Product202501SearchManufacturersResponse.attributeTypeMap;
    }
}
exports.Product202501SearchManufacturersResponse = Product202501SearchManufacturersResponse;
Product202501SearchManufacturersResponse.discriminator = undefined;
Product202501SearchManufacturersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202501SearchManufacturersResponseData"
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
//# sourceMappingURL=SearchManufacturersResponse.js.map