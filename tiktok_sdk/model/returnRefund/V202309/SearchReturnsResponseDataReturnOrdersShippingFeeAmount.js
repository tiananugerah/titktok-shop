"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount = void 0;
class ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount = ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount.discriminator = undefined;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount.attributeTypeMap = [
    {
        "name": "buyerPaidReturnShippingFee",
        "baseName": "buyer_paid_return_shipping_fee",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "platformPaidReturnShippingFee",
        "baseName": "platform_paid_return_shipping_fee",
        "type": "string"
    },
    {
        "name": "sellerPaidReturnShippingFee",
        "baseName": "seller_paid_return_shipping_fee",
        "type": "string"
    }
];
//# sourceMappingURL=SearchReturnsResponseDataReturnOrdersShippingFeeAmount.js.map