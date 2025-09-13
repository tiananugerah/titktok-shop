"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderListRequestBody = void 0;
class Order202309GetOrderListRequestBody {
    static getAttributeTypeMap() {
        return Order202309GetOrderListRequestBody.attributeTypeMap;
    }
}
exports.Order202309GetOrderListRequestBody = Order202309GetOrderListRequestBody;
Order202309GetOrderListRequestBody.discriminator = undefined;
Order202309GetOrderListRequestBody.attributeTypeMap = [
    {
        "name": "buyerUserId",
        "baseName": "buyer_user_id",
        "type": "string"
    },
    {
        "name": "createTimeGe",
        "baseName": "create_time_ge",
        "type": "number"
    },
    {
        "name": "createTimeLt",
        "baseName": "create_time_lt",
        "type": "number"
    },
    {
        "name": "isBuyerRequestCancel",
        "baseName": "is_buyer_request_cancel",
        "type": "boolean"
    },
    {
        "name": "orderStatus",
        "baseName": "order_status",
        "type": "string"
    },
    {
        "name": "shippingType",
        "baseName": "shipping_type",
        "type": "string"
    },
    {
        "name": "updateTimeGe",
        "baseName": "update_time_ge",
        "type": "number"
    },
    {
        "name": "updateTimeLt",
        "baseName": "update_time_lt",
        "type": "number"
    },
    {
        "name": "warehouseIds",
        "baseName": "warehouse_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=GetOrderListRequestBody.js.map