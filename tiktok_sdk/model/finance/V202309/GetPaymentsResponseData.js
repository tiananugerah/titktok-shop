"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetPaymentsResponseData = void 0;
class Finance202309GetPaymentsResponseData {
    static getAttributeTypeMap() {
        return Finance202309GetPaymentsResponseData.attributeTypeMap;
    }
}
exports.Finance202309GetPaymentsResponseData = Finance202309GetPaymentsResponseData;
Finance202309GetPaymentsResponseData.discriminator = undefined;
Finance202309GetPaymentsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<Finance202309GetPaymentsResponseDataPayments>"
    }
];
//# sourceMappingURL=GetPaymentsResponseData.js.map