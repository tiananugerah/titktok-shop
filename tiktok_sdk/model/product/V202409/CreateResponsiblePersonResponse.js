"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409CreateResponsiblePersonResponse = void 0;
class Product202409CreateResponsiblePersonResponse {
    static getAttributeTypeMap() {
        return Product202409CreateResponsiblePersonResponse.attributeTypeMap;
    }
}
exports.Product202409CreateResponsiblePersonResponse = Product202409CreateResponsiblePersonResponse;
Product202409CreateResponsiblePersonResponse.discriminator = undefined;
Product202409CreateResponsiblePersonResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202409CreateResponsiblePersonResponseData"
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
//# sourceMappingURL=CreateResponsiblePersonResponse.js.map