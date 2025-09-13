"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CalculateRefundRequestBody = void 0;
class ReturnRefund202309CalculateRefundRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309CalculateRefundRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309CalculateRefundRequestBody = ReturnRefund202309CalculateRefundRequestBody;
ReturnRefund202309CalculateRefundRequestBody.discriminator = undefined;
ReturnRefund202309CalculateRefundRequestBody.attributeTypeMap = [
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
        "name": "reasonName",
        "baseName": "reason_name",
        "type": "string"
    },
    {
        "name": "requestType",
        "baseName": "request_type",
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
        "type": "Array<ReturnRefund202309CalculateRefundRequestBodySkus>"
    }
];
//# sourceMappingURL=CalculateRefundRequestBody.js.map