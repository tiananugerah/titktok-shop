"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309ApproveReturnResponse = void 0;
class ReturnRefund202309ApproveReturnResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309ApproveReturnResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309ApproveReturnResponse = ReturnRefund202309ApproveReturnResponse;
ReturnRefund202309ApproveReturnResponse.discriminator = undefined;
ReturnRefund202309ApproveReturnResponse.attributeTypeMap = [
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
//# sourceMappingURL=ApproveReturnResponse.js.map