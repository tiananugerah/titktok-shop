"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202501SearchResponsiblePersonsResponse = void 0;
class Product202501SearchResponsiblePersonsResponse {
    static getAttributeTypeMap() {
        return Product202501SearchResponsiblePersonsResponse.attributeTypeMap;
    }
}
exports.Product202501SearchResponsiblePersonsResponse = Product202501SearchResponsiblePersonsResponse;
Product202501SearchResponsiblePersonsResponse.discriminator = undefined;
Product202501SearchResponsiblePersonsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202501SearchResponsiblePersonsResponseData"
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
//# sourceMappingURL=SearchResponsiblePersonsResponse.js.map