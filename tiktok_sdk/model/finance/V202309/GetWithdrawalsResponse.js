"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetWithdrawalsResponse = void 0;
class Finance202309GetWithdrawalsResponse {
    static getAttributeTypeMap() {
        return Finance202309GetWithdrawalsResponse.attributeTypeMap;
    }
}
exports.Finance202309GetWithdrawalsResponse = Finance202309GetWithdrawalsResponse;
Finance202309GetWithdrawalsResponse.discriminator = undefined;
Finance202309GetWithdrawalsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202309GetWithdrawalsResponseData"
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
//# sourceMappingURL=GetWithdrawalsResponse.js.map