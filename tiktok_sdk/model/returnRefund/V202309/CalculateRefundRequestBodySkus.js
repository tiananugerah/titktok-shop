"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CalculateRefundRequestBodySkus = void 0;
class ReturnRefund202309CalculateRefundRequestBodySkus {
    static getAttributeTypeMap() {
        return ReturnRefund202309CalculateRefundRequestBodySkus.attributeTypeMap;
    }
}
exports.ReturnRefund202309CalculateRefundRequestBodySkus = ReturnRefund202309CalculateRefundRequestBodySkus;
ReturnRefund202309CalculateRefundRequestBodySkus.discriminator = undefined;
ReturnRefund202309CalculateRefundRequestBodySkus.attributeTypeMap = [
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
//# sourceMappingURL=CalculateRefundRequestBodySkus.js.map