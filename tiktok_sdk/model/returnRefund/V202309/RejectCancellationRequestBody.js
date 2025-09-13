"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309RejectCancellationRequestBody = void 0;
class ReturnRefund202309RejectCancellationRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309RejectCancellationRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309RejectCancellationRequestBody = ReturnRefund202309RejectCancellationRequestBody;
ReturnRefund202309RejectCancellationRequestBody.discriminator = undefined;
ReturnRefund202309RejectCancellationRequestBody.attributeTypeMap = [
    {
        "name": "comment",
        "baseName": "comment",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<ReturnRefund202309RejectCancellationRequestBodyImages>"
    },
    {
        "name": "rejectReason",
        "baseName": "reject_reason",
        "type": "string"
    }
];
//# sourceMappingURL=RejectCancellationRequestBody.js.map