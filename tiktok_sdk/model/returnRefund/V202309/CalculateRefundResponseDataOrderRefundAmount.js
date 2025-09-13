"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount = void 0;
class ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount {
    static getAttributeTypeMap() {
        return ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount.attributeTypeMap;
    }
}
exports.ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount = ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount;
ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount.discriminator = undefined;
ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount.attributeTypeMap = [
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
//# sourceMappingURL=CalculateRefundResponseDataOrderRefundAmount.js.map