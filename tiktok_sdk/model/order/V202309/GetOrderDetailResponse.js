"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderDetailResponse = void 0;
class Order202309GetOrderDetailResponse {
    static getAttributeTypeMap() {
        return Order202309GetOrderDetailResponse.attributeTypeMap;
    }
}
exports.Order202309GetOrderDetailResponse = Order202309GetOrderDetailResponse;
Order202309GetOrderDetailResponse.discriminator = undefined;
Order202309GetOrderDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Order202309GetOrderDetailResponseData"
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