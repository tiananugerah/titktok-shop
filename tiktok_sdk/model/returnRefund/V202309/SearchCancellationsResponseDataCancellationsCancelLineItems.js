"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems = void 0;
class ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems = ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems;
ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems.discriminator = undefined;
ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems.attributeTypeMap = [
    {
        "name": "cancelLineItemId",
        "baseName": "cancel_line_item_id",
        "type": "string"
    },
    {
        "name": "orderLineItemId",
        "baseName": "order_line_item_id",
        "type": "string"
    },
    {
        "name": "productImage",
        "baseName": "product_image",
        "type": "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage"
    },
    {
        "name": "productName",
        "baseName": "product_name",
        "type": "string"
    },
    {
        "name": "refundAmount",
        "baseName": "refund_amount",
        "type": "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount"
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
//# sourceMappingURL=SearchCancellationsResponseDataCancellationsCancelLineItems.js.map