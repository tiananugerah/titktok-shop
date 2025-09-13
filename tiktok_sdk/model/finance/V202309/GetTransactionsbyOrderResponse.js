"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetTransactionsbyOrderResponse = void 0;
class Finance202309GetTransactionsbyOrderResponse {
    static getAttributeTypeMap() {
        return Finance202309GetTransactionsbyOrderResponse.attributeTypeMap;
    }
}
exports.Finance202309GetTransactionsbyOrderResponse = Finance202309GetTransactionsbyOrderResponse;
Finance202309GetTransactionsbyOrderResponse.discriminator = undefined;
Finance202309GetTransactionsbyOrderResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202309GetTransactionsbyOrderResponseData"
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