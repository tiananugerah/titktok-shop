"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CreateReturnRequestBody = void 0;
class ReturnRefund202309CreateReturnRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309CreateReturnRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309CreateReturnRequestBody = ReturnRefund202309CreateReturnRequestBody;
ReturnRefund202309CreateReturnRequestBody.discriminator = undefined;
ReturnRefund202309CreateReturnRequestBody.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "handoverMethod",
        "baseName": "handover_method",
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
        "name": "refundTotal",
        "baseName": "refund_total",
        "type": "string"
    },
    {
        "name": "returnReason",
        "baseName": "return_reason",
        "type": "string"
    },
    {
        "name": "returnType",
        "baseName": "return_type",
        "type": "string"
    },
    {
        "name": "shipmentType",
        "baseName": "shipment_type",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<ReturnRefund202309CreateReturnRequestBodySkus>"
    }
];
//# sourceMappingURL=CreateReturnRequestBody.js.map