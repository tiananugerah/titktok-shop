"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309RejectReturnRequestBody = void 0;
class ReturnRefund202309RejectReturnRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309RejectReturnRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309RejectReturnRequestBody = ReturnRefund202309RejectReturnRequestBody;
ReturnRefund202309RejectReturnRequestBody.discriminator = undefined;
ReturnRefund202309RejectReturnRequestBody.attributeTypeMap = [
    {
        "name": "comment",
        "baseName": "comment",
        "type": "string"
    },
    {
        "name": "decision",
        "baseName": "decision",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<ReturnRefund202309RejectReturnRequestBodyImages>"
    },
    {
        "name": "rejectReason",
        "baseName": "reject_reason",
        "type": "string"
    }
];
//# sourceMappingURL=RejectReturnRequestBody.js.map