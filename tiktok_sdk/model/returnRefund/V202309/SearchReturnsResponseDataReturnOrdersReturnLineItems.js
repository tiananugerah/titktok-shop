"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems = void 0;
class ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems = ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems.discriminator = undefined;
ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems.attributeTypeMap = [
    {
        "name": "orderLineItemId",
        "baseName": "order_line_item_id",
        "type": "string"
    },
    {
        "name": "productImage",
        "baseName": "product_image",
        "type": "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage"
    },
    {
        "name": "productName",
        "baseName": "product_name",
        "type": "string"
    },
    {
        "name": "refundAmount",
        "baseName": "refund_amount",
        "type": "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount"
    },
    {
        "name": "returnLineItemId",
        "baseName": "return_line_item_id",
        "type": "string"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    },
    {
        "name": "skuName",
        "baseName": "sku_name",
        "type": "string"
    }
];
//# sourceMappingURL=SearchReturnsResponseDataReturnOrdersReturnLineItems.js.map