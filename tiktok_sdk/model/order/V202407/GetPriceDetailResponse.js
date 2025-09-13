"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202407GetPriceDetailResponse = void 0;
class Order202407GetPriceDetailResponse {
    static getAttributeTypeMap() {
        return Order202407GetPriceDetailResponse.attributeTypeMap;
    }
}
exports.Order202407GetPriceDetailResponse = Order202407GetPriceDetailResponse;
Order202407GetPriceDetailResponse.discriminator = undefined;
Order202407GetPriceDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Order202407GetPriceDetailResponseData"
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
//# sourceMappingURL=GetPriceDetailResponse.js.map