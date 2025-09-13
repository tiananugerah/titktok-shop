"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CalculateRefundResponse = void 0;
class ReturnRefund202309CalculateRefundResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309CalculateRefundResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309CalculateRefundResponse = ReturnRefund202309CalculateRefundResponse;
ReturnRefund202309CalculateRefundResponse.discriminator = undefined;
ReturnRefund202309CalculateRefundResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309CalculateRefundResponseData"
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
//# sourceMappingURL=CalculateRefundResponse.js.map