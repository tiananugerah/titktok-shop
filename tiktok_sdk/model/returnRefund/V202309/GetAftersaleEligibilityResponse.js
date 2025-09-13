"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309GetAftersaleEligibilityResponse = void 0;
class ReturnRefund202309GetAftersaleEligibilityResponse {
    static getAttributeTypeMap() {
        return ReturnRefund202309GetAftersaleEligibilityResponse.attributeTypeMap;
    }
}
exports.ReturnRefund202309GetAftersaleEligibilityResponse = ReturnRefund202309GetAftersaleEligibilityResponse;
ReturnRefund202309GetAftersaleEligibilityResponse.discriminator = undefined;
ReturnRefund202309GetAftersaleEligibilityResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "ReturnRefund202309GetAftersaleEligibilityResponseData"
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
//# sourceMappingURL=GetAftersaleEligibilityResponse.js.map