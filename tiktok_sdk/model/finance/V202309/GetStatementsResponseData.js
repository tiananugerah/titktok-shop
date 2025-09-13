"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetStatementsResponseData = void 0;
class Finance202309GetStatementsResponseData {
    static getAttributeTypeMap() {
        return Finance202309GetStatementsResponseData.attributeTypeMap;
    }
}
exports.Finance202309GetStatementsResponseData = Finance202309GetStatementsResponseData;
Finance202309GetStatementsResponseData.discriminator = undefined;
Finance202309GetStatementsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "statements",
        "baseName": "statements",
        "type": "Array<Finance202309GetStatementsResponseDataStatements>"
    }
];
//# sourceMappingURL=GetStatementsResponseData.js.map