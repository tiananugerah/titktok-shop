"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchCancellationsResponse = void 0;
class ReturnRefund202309SearchCancellationsResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchCancellationsResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchCancellationsResponse = ReturnRefund202309SearchCancellationsResponse;
ReturnRefund202309SearchCancellationsResponse.discriminator = undefined;
ReturnRefund202309SearchCancellationsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309SearchCancellationsResponseData"
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
//# sourceMappingURL=SearchCancellationsResponse.js.map