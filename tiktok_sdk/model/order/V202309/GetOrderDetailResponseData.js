"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderDetailResponseData = void 0;
class Order202309GetOrderDetailResponseData {
    static getAttributeTypeMap() {
        return Order202309GetOrderDetailResponseData.attributeTypeMap;
    }
}
exports.Order202309GetOrderDetailResponseData = Order202309GetOrderDetailResponseData;
Order202309GetOrderDetailResponseData.discriminator = undefined;
Order202309GetOrderDetailResponseData.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Order202309GetOrderDetailResponseDataOrders>"
    }
];
//# sourceMappingURL=GetOrderDetailResponseData.js.map