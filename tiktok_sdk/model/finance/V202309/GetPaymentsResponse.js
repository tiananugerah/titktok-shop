"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetPaymentsResponse = void 0;
class Finance202309GetPaymentsResponse {
    static getAttributeTypeMap() {
        return Finance202309GetPaymentsResponse.attributeTypeMap;
    }
}
exports.Finance202309GetPaymentsResponse = Finance202309GetPaymentsResponse;
Finance202309GetPaymentsResponse.discriminator = undefined;
Finance202309GetPaymentsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202309GetPaymentsResponseData"
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
//# sourceMappingURL=GetPaymentsResponse.js.map