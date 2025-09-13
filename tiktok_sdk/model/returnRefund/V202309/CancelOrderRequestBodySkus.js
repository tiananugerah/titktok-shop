"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CancelOrderRequestBodySkus = void 0;
class ReturnRefund202309CancelOrderRequestBodySkus {
    static getAttributeTypeMap() {
        return ReturnRefund202309CancelOrderRequestBodySkus.attributeTypeMap;
    }
}
exports.ReturnRefund202309CancelOrderRequestBodySkus = ReturnRefund202309CancelOrderRequestBodySkus;
ReturnRefund202309CancelOrderRequestBodySkus.discriminator = undefined;
ReturnRefund202309CancelOrderRequestBodySkus.attributeTypeMap = [
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    }
];
//# sourceMappingURL=CancelOrderRequestBodySkus.js.map