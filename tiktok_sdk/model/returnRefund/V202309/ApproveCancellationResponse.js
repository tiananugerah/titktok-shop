"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309ApproveCancellationResponse = void 0;
class ReturnRefund202309ApproveCancellationResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309ApproveCancellationResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309ApproveCancellationResponse = ReturnRefund202309ApproveCancellationResponse;
ReturnRefund202309ApproveCancellationResponse.discriminator = undefined;
ReturnRefund202309ApproveCancellationResponse.attributeTypeMap = [
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
//# sourceMappingURL=ApproveCancellationResponse.js.map