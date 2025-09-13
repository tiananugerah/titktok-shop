"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CancelOrderResponse = void 0;
class ReturnRefund202309CancelOrderResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309CancelOrderResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309CancelOrderResponse = ReturnRefund202309CancelOrderResponse;
ReturnRefund202309CancelOrderResponse.discriminator = undefined;
ReturnRefund202309CancelOrderResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309CancelOrderResponseData"
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
//# sourceMappingURL=CancelOrderResponse.js.map