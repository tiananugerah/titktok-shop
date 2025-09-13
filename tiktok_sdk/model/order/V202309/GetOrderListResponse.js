"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderListResponse = void 0;
class Order202309GetOrderListResponse {
    static getAttributeTypeMap() {
        return Order202309GetOrderListResponse.attributeTypeMap;
    }
}
exports.Order202309GetOrderListResponse = Order202309GetOrderListResponse;
Order202309GetOrderListResponse.discriminator = undefined;
Order202309GetOrderListResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Order202309GetOrderListResponseData"
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
//# sourceMappingURL=GetOrderListResponse.js.map