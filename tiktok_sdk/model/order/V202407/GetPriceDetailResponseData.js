"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202407GetPriceDetailResponseData = void 0;
class Order202407GetPriceDetailResponseData {
    static getAttributeTypeMap() {
        return Order202407GetPriceDetailResponseData.attributeTypeMap;
    }
}
exports.Order202407GetPriceDetailResponseData = Order202407GetPriceDetailResponseData;
Order202407GetPriceDetailResponseData.discriminator = undefined;
Order202407GetPriceDetailResponseData.attributeTypeMap = [
    {
        "name": "codFee",
        "baseName": "cod_fee",
        "type": "string"
    },
    {
        "name": "codFeeNetAmount",
        "baseName": "cod_fee_net_amount",
        "type": "string"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "lineItems",
        "baseName": "line_items",
        "type": "Array<Order202407GetPriceDetailResponseDataLineItems>"
    },
    {
        "name": "netPriceAmount",
        "baseName": "net_price_amount",
        "type": "string"
    },
    {
        "name": "payment",
        "baseName": "payment",
        "type": "string"
    },
    {
        "name": "shippingFeeDeductionPlatform",
        "baseName": "shipping_fee_deduction_platform",
        "type": "string"
    },
    {
        "name": "shippingFeeDeductionPlatformVoucher",
        "baseName": "shipping_fee_deduction_platform_voucher",
        "type": "string"
    },
    {
        "name": "shippingFeeDeductionSeller",
        "baseName": "shipping_fee_deduction_seller",
        "type": "string"
    },
    {
        "name": "shippingListPrice",
        "baseName": "shipping_list_price",
        "type": "string"
    },
    {
        "name": "shippingSalePrice",
        "baseName": "shipping_sale_price",
        "type": "string"
    },
    {
        "name": "skuGiftNetPrice",
        "baseName": "sku_gift_net_price",
        "type": "string"
    },
    {
        "name": "skuGiftOriginalPrice",
        "baseName": "sku_gift_original_price",
        "type": "string"
    },
    {
        "name": "skuListPrice",
        "baseName": "sku_list_price",
        "type": "string"
    },
    {
        "name": "skuSalePrice",
        "baseName": "sku_sale_price",
        "type": "string"
    },
    {
        "name": "subtotal",
        "baseName": "subtotal",
        "type": "string"
    },
    {
        "name": "subtotalDeductionPlatform",
        "baseName": "subtotal_deduction_platform",
        "type": "string"
    },
    {
        "name": "subtotalDeductionSeller",
        "baseName": "subtotal_deduction_seller",
        "type": "string"
    },
    {
        "name": "subtotalTaxAmount",
        "baseName": "subtotal_tax_amount",
        "type": "string"
    },
    {
        "name": "taxAmount",
        "baseName": "tax_amount",
        "type": "string"
    },
    {
        "name": "taxRate",
        "baseName": "tax_rate",
        "type": "string"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "string"
    },
    {
        "name": "voucherDeductionPlatform",
        "baseName": "voucher_deduction_platform",
        "type": "string"
    },
    {
        "name": "voucherDeductionSeller",
        "baseName": "voucher_deduction_seller",
        "type": "string"
    }
];
//# sourceMappingURL=GetPriceDetailResponseData.js.map