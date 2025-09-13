"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409PartialEditManufacturerResponse = void 0;
class Product202409PartialEditManufacturerResponse {
    static getAttributeTypeMap() {
        return Product202409PartialEditManufacturerResponse.attributeTypeMap;
    }
}
exports.Product202409PartialEditManufacturerResponse = Product202409PartialEditManufacturerResponse;
Product202409PartialEditManufacturerResponse.discriminator = undefined;
Product202409PartialEditManufacturerResponse.attributeTypeMap = [
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
//# sourceMappingURL=PartialEditManufacturerResponse.js.map