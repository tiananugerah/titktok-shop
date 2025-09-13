"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchCancellationsResponseDataCancellations = void 0;
class ReturnRefund202309SearchCancellationsResponseDataCancellations {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchCancellationsResponseDataCancellations.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchCancellationsResponseDataCancellations = ReturnRefund202309SearchCancellationsResponseDataCancellations;
ReturnRefund202309SearchCancellationsResponseDataCancellations.discriminator = undefined;
ReturnRefund202309SearchCancellationsResponseDataCancellations.attributeTypeMap = [
    {
        "name": "cancelId",
        "baseName": "cancel_id",
        "type": "string"
    },
    {
        "name": "cancelLineItems",
        "baseName": "cancel_line_items",
        "type": "Array<ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems>"
    },
    {
        "name": "cancelReason",
        "baseName": "cancel_reason",
        "type": "string"
    },
    {
        "name": "cancelReasonText",
        "baseName": "cancel_reason_text",
        "type": "string"
    },
    {
        "name": "cancelStatus",
        "baseName": "cancel_status",
        "type": "string"
    },
    {
        "name": "cancelType",
        "baseName": "cancel_type",
        "type": "string"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "refundAmount",
        "baseName": "refund_amount",
        "type": "ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount"
    },
    {
        "name": "role",
        "baseName": "role",
        "type": "string"
    },
    {
        "name": "sellerNextActionResponse",
        "baseName": "seller_next_action_response",
        "type": "Array<ReturnRefund202309SearchCancellationsResponseDataCancellationsSellerNextActionResponse>"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCancellationsResponseDataCancellations.js.map