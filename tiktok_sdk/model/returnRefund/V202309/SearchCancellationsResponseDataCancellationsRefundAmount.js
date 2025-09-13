"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount = void 0;
class ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount = ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount;
ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount.discriminator = undefined;
ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount.attributeTypeMap = [
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
//# sourceMappingURL=SearchCancellationsResponseDataCancellationsRefundAmount.js.map