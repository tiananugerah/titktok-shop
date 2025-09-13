"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309CreateReturnResponse = void 0;
class ReturnRefund202309CreateReturnResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309CreateReturnResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309CreateReturnResponse = ReturnRefund202309CreateReturnResponse;
ReturnRefund202309CreateReturnResponse.discriminator = undefined;
ReturnRefund202309CreateReturnResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309CreateReturnResponseData"
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
//# sourceMappingURL=CreateReturnResponse.js.map