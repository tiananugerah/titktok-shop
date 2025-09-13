"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrders = void 0;
class ReturnRefund202309SearchReturnsResponseDataReturnOrders {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsResponseDataReturnOrders.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrders = ReturnRefund202309SearchReturnsResponseDataReturnOrders;
ReturnRefund202309SearchReturnsResponseDataReturnOrders.discriminator = undefined;
ReturnRefund202309SearchReturnsResponseDataReturnOrders.attributeTypeMap = [
    {
        "name": "arbitrationStatus",
        "baseName": "arbitration_status",
        "type": "string"
    },
    {
        "name": "buyerRejectedPartialRefund",
        "baseName": "buyer_rejected_partial_refund",
        "type": "boolean"
    },
    {
        "name": "canBuyerKeepItem",
        "baseName": "can_buyer_keep_item",
        "type": "boolean"
    },
    {
        "name": "combinedReturnId",
        "baseName": "combined_return_id",
        "type": "string"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "discountAmount",
        "baseName": "discount_amount",
        "type": "Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount>"
    },
    {
        "name": "handoverMethod",
        "baseName": "handover_method",
        "type": "string"
    },
    {
        "name": "isCombinedReturn",
        "baseName": "is_combined_return",
        "type": "boolean"
    },
    {
        "name": "nextReturnId",
        "baseName": "next_return_id",
        "type": "string"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "partialRefund",
        "baseName": "partial_refund",
        "type": "ReturnRefund202309SearchReturnsResponseDataReturnOrdersPartialRefund"
    },
    {
        "name": "preReturnId",
        "baseName": "pre_return_id",
        "type": "string"
    },
    {
        "name": "refundAmount",
        "baseName": "refund_amount",
        "type": "ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount"
    },
    {
        "name": "returnId",
        "baseName": "return_id",
        "type": "string"
    },
    {
        "name": "returnLineItems",
        "baseName": "return_line_items",
        "type": "Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems>"
    },
    {
        "name": "returnMethod",
        "baseName": "return_method",
        "type": "string"
    },
    {
        "name": "returnProviderId",
        "baseName": "return_provider_id",
        "type": "string"
    },
    {
        "name": "returnProviderName",
        "baseName": "return_provider_name",
        "type": "string"
    },
    {
        "name": "returnReason",
        "baseName": "return_reason",
        "type": "string"
    },
    {
        "name": "returnReasonText",
        "baseName": "return_reason_text",
        "type": "string"
    },
    {
        "name": "returnShippingDocumentType",
        "baseName": "return_shipping_document_type",
        "type": "string"
    },
    {
        "name": "returnStatus",
        "baseName": "return_status",
        "type": "string"
    },
    {
        "name": "returnTrackingNumber",
        "baseName": "return_tracking_number",
        "type": "string"
    },
    {
        "name": "returnType",
        "baseName": "return_type",
        "type": "string"
    },
    {
        "name": "returnWarehouseAddress",
        "baseName": "return_warehouse_address",
        "type": "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress"
    },
    {
        "name": "role",
        "baseName": "role",
        "type": "string"
    },
    {
        "name": "sellerNextActionResponse",
        "baseName": "seller_next_action_response",
        "type": "Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersSellerNextActionResponse>"
    },
    {
        "name": "sellerProposedReturnType",
        "baseName": "seller_proposed_return_type",
        "type": "string"
    },
    {
        "name": "shipmentType",
        "baseName": "shipment_type",
        "type": "string"
    },
    {
        "name": "shippingFeeAmount",
        "baseName": "shipping_fee_amount",
        "type": "Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount>"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=SearchReturnsResponseDataReturnOrders.js.map