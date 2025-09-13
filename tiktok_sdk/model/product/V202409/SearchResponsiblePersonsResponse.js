"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchResponsiblePersonsResponse = void 0;
class Product202409SearchResponsiblePersonsResponse {
    static getAttributeTypeMap() {
        return Product202409SearchResponsiblePersonsResponse.attributeTypeMap;
    }
}
exports.Product202409SearchResponsiblePersonsResponse = Product202409SearchResponsiblePersonsResponse;
Product202409SearchResponsiblePersonsResponse.discriminator = undefined;
Product202409SearchResponsiblePersonsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202409SearchResponsiblePersonsResponseData"
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