"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount = void 0;
class ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount = ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount.discriminator = undefined;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount.attributeTypeMap = [
    {
        "name": "buyerServiceFee",
        "baseName": "buyer_service_fee",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "refundShippingFee",
        "baseName": "refund_shipping_fee",
        "type": "string"
    },
    {
        "name": "refundSubtotal",
        "baseName": "refund_subtotal",
        "type": "string"
    },
    {
        "name": "refundTax",
        "baseName": "refund_tax",
        "type": "string"
    },
    {
        "name": "refundTotal",
        "baseName": "refund_total",
        "type": "string"
    },
    {
        "name": "retailDeliveryFee",
        "baseName": "retail_delivery_fee",
        "type": "string"
    }
];
//# sourceMappingURL=SearchReturnsResponseDataReturnOrdersRefundAmount.js.map