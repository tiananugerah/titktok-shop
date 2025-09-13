"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309RejectReturnResponse = void 0;
class ReturnRefund202309RejectReturnResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309RejectReturnResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309RejectReturnResponse = ReturnRefund202309RejectReturnResponse;
ReturnRefund202309RejectReturnResponse.discriminator = undefined;
ReturnRefund202309RejectReturnResponse.attributeTypeMap = [
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
//# sourceMappingURL=RejectReturnResponse.js.map