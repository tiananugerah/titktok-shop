"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderListResponseData = void 0;
class Order202309GetOrderListResponseData {
    static getAttributeTypeMap() {
        return Order202309GetOrderListResponseData.attributeTypeMap;
    }
}
exports.Order202309GetOrderListResponseData = Order202309GetOrderListResponseData;
Order202309GetOrderListResponseData.discriminator = undefined;
Order202309GetOrderListResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Order202309GetOrderListResponseDataOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetOrderListResponseData.js.map