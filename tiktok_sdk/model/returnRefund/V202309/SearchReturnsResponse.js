"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsResponse = void 0;
class ReturnRefund202309SearchReturnsResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsResponse = ReturnRefund202309SearchReturnsResponse;
ReturnRefund202309SearchReturnsResponse.discriminator = undefined;
ReturnRefund202309SearchReturnsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309SearchReturnsResponseData"
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
//# sourceMappingURL=SearchReturnsResponse.js.map