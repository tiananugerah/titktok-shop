"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyStatementResponse = void 0;
class Finance202501GetTransactionsbyStatementResponse {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyStatementResponse.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyStatementResponse = Finance202501GetTransactionsbyStatementResponse;
Finance202501GetTransactionsbyStatementResponse.discriminator = undefined;
Finance202501GetTransactionsbyStatementResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202501GetTransactionsbyStatementResponseData"
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