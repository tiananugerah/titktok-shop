"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309GetReturnRecordsResponse = void 0;
class ReturnRefund202309GetReturnRecordsResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309GetReturnRecordsResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309GetReturnRecordsResponse = ReturnRefund202309GetReturnRecordsResponse;
ReturnRefund202309GetReturnRecordsResponse.discriminator = undefined;
ReturnRefund202309GetReturnRecordsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309GetReturnRecordsResponseData"
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
//# sourceMappingURL=GetReturnRecordsResponse.js.map