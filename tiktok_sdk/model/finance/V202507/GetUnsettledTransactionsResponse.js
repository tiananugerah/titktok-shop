"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202507GetUnsettledTransactionsResponse = void 0;
class Finance202507GetUnsettledTransactionsResponse {
    static getAttributeTypeMap() {
        return Finance202507GetUnsettledTransactionsResponse.attributeTypeMap;
    }
}
exports.Finance202507GetUnsettledTransactionsResponse = Finance202507GetUnsettledTransactionsResponse;
Finance202507GetUnsettledTransactionsResponse.discriminator = undefined;
Finance202507GetUnsettledTransactionsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Finance202507GetUnsettledTransactionsResponseData"
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
//# sourceMappingURL=GetUnsettledTransactionsResponse.js.map