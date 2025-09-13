"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount = void 0;
class ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount = ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount.discriminator = undefined;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "productPlatformDiscount",
        "baseName": "product_platform_discount",
        "type": "string"
    },
    {
        "name": "productSellerDiscount",
        "baseName": "product_seller_discount",
        "type": "string"
    },
    {
        "name": "shippingFeePlatformDiscount",
        "baseName": "shipping_fee_platform_discount",
        "type": "string"
    },
    {
        "name": "shippingFeeSellerDiscount",
        "baseName": "shipping_fee_seller_discount",
        "type": "string"
    }
];
//# sourceMappingURL=SearchReturnsResponseDataReturnOrdersDiscountAmount.js.map