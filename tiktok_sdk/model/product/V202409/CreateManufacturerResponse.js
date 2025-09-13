"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409CreateManufacturerResponse = void 0;
class Product202409CreateManufacturerResponse {
    static getAttributeTypeMap() {
        return Product202409CreateManufacturerResponse.attributeTypeMap;
    }
}
exports.Product202409CreateManufacturerResponse = Product202409CreateManufacturerResponse;
Product202409CreateManufacturerResponse.discriminator = undefined;
Product202409CreateManufacturerResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202409CreateManufacturerResponseData"
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
//# sourceMappingURL=CreateManufacturerResponse.js.map