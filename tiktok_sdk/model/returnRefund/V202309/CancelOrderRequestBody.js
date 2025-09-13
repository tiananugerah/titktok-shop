"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CancelOrderRequestBody = void 0;
class ReturnRefund202309CancelOrderRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309CancelOrderRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309CancelOrderRequestBody = ReturnRefund202309CancelOrderRequestBody;
ReturnRefund202309CancelOrderRequestBody.discriminator = undefined;
ReturnRefund202309CancelOrderRequestBody.attributeTypeMap = [
    {
        "name": "cancelReason",
        "baseName": "cancel_reason",
        "type": "string"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<ReturnRefund202309CancelOrderRequestBodySkus>"
    }
];
//# sourceMappingURL=CancelOrderRequestBody.js.map