"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchManufacturersResponse = void 0;
class Product202409SearchManufacturersResponse {
    static getAttributeTypeMap() {
        return Product202409SearchManufacturersResponse.attributeTypeMap;
    }
}
exports.Product202409SearchManufacturersResponse = Product202409SearchManufacturersResponse;
Product202409SearchManufacturersResponse.discriminator = undefined;
Product202409SearchManufacturersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202409SearchManufacturersResponseData"
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