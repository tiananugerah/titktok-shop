"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202507GetOrderDetailResponse = void 0;
class Order202507GetOrderDetailResponse {
    static getAttributeTypeMap() {
        return Order202507GetOrderDetailResponse.attributeTypeMap;
    }
}
exports.Order202507GetOrderDetailResponse = Order202507GetOrderDetailResponse;
Order202507GetOrderDetailResponse.discriminator = undefined;
Order202507GetOrderDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Order202507GetOrderDetailResponseData"
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
//# sourceMappingURL=GetOrderDetailResponse.js.map