"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetStatementsResponse = void 0;
class Finance202309GetStatementsResponse {
    static getAttributeTypeMap() {
        return Finance202309GetStatementsResponse.attributeTypeMap;
    }
}
exports.Finance202309GetStatementsResponse = Finance202309GetStatementsResponse;
Finance202309GetStatementsResponse.discriminator = undefined;
Finance202309GetStatementsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202309GetStatementsResponseData"
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
//# sourceMappingURL=GetStatementsResponse.js.map