"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309ApproveReturnRequestBody = void 0;
class ReturnRefund202309ApproveReturnRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309ApproveReturnRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309ApproveReturnRequestBody = ReturnRefund202309ApproveReturnRequestBody;
ReturnRefund202309ApproveReturnRequestBody.discriminator = undefined;
ReturnRefund202309ApproveReturnRequestBody.attributeTypeMap = [
    {
        "name": "buyerKeepItem",
        "baseName": "buyer_keep_item",
        "type": "boolean"
    },
    {
        "name": "decision",
        "baseName": "decision",
        "type": "string"
    },
    {
        "name": "partialRefund",
        "baseName": "partial_refund",
        "type": "ReturnRefund202309ApproveReturnRequestBodyPartialRefund"
    }
];
//# sourceMappingURL=ApproveReturnRequestBody.js.map