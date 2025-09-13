"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309GetRejectReasonsResponse = void 0;
class ReturnRefund202309GetRejectReasonsResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309GetRejectReasonsResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309GetRejectReasonsResponse = ReturnRefund202309GetRejectReasonsResponse;
ReturnRefund202309GetRejectReasonsResponse.discriminator = undefined;
ReturnRefund202309GetRejectReasonsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309GetRejectReasonsResponseData"
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
//# sourceMappingURL=GetRejectReasonsResponse.js.map