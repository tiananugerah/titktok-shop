"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetWithdrawalsResponseData = void 0;
class Finance202309GetWithdrawalsResponseData {
    static getAttributeTypeMap() {
        return Finance202309GetWithdrawalsResponseData.attributeTypeMap;
    }
}
exports.Finance202309GetWithdrawalsResponseData = Finance202309GetWithdrawalsResponseData;
Finance202309GetWithdrawalsResponseData.discriminator = undefined;
Finance202309GetWithdrawalsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    },
    {
        "name": "withdrawals",
        "baseName": "withdrawals",
        "type": "Array<Finance202309GetWithdrawalsResponseDataWithdrawals>"
    }
];
//# sourceMappingURL=GetWithdrawalsResponseData.js.map