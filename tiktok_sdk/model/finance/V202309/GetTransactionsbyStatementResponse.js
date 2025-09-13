"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetTransactionsbyStatementResponse = void 0;
class Finance202309GetTransactionsbyStatementResponse {
    static getAttributeTypeMap() {
        return Finance202309GetTransactionsbyStatementResponse.attributeTypeMap;
    }
}
exports.Finance202309GetTransactionsbyStatementResponse = Finance202309GetTransactionsbyStatementResponse;
Finance202309GetTransactionsbyStatementResponse.discriminator = undefined;
Finance202309GetTransactionsbyStatementResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202309GetTransactionsbyStatementResponseData"
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
//# sourceMappingURL=GetTransactionsbyStatementResponse.js.map