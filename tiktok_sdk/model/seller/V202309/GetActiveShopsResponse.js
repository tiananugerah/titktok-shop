"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller202309GetActiveShopsResponse = void 0;
class Seller202309GetActiveShopsResponse {
    static getAttributeTypeMap() {
        return Seller202309GetActiveShopsResponse.attributeTypeMap;
    }
}
exports.Seller202309GetActiveShopsResponse = Seller202309GetActiveShopsResponse;
Seller202309GetActiveShopsResponse.discriminator = undefined;
Seller202309GetActiveShopsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Seller202309GetActiveShopsResponseData"
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
//# sourceMappingURL=GetActiveShopsResponse.js.map