"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309RejectCancellationResponse = void 0;
class ReturnRefund202309RejectCancellationResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309RejectCancellationResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309RejectCancellationResponse = ReturnRefund202309RejectCancellationResponse;
ReturnRefund202309RejectCancellationResponse.discriminator = undefined;
ReturnRefund202309RejectCancellationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=RejectCancellationResponse.js.map