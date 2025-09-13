"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409PartialEditResponsiblePersonResponse = void 0;
class Product202409PartialEditResponsiblePersonResponse {
    static getAttributeTypeMap() {
        return Product202409PartialEditResponsiblePersonResponse.attributeTypeMap;
    }
}
exports.Product202409PartialEditResponsiblePersonResponse = Product202409PartialEditResponsiblePersonResponse;
Product202409PartialEditResponsiblePersonResponse.discriminator = undefined;
Product202409PartialEditResponsiblePersonResponse.attributeTypeMap = [
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
//# sourceMappingURL=PartialEditResponsiblePersonResponse.js.map