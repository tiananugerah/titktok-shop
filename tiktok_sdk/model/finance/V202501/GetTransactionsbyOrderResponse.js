"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202501GetTransactionsbyOrderResponse = void 0;
class Finance202501GetTransactionsbyOrderResponse {
    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyOrderResponse.attributeTypeMap;
    }
}
exports.Finance202501GetTransactionsbyOrderResponse = Finance202501GetTransactionsbyOrderResponse;
Finance202501GetTransactionsbyOrderResponse.discriminator = undefined;
Finance202501GetTransactionsbyOrderResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202501GetTransactionsbyOrderResponseData"
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
//# sourceMappingURL=GetTransactionsbyOrderResponse.js.map