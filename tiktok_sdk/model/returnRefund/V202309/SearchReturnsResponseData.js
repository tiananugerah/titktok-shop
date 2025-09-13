"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsResponseData = void 0;
class ReturnRefund202309SearchReturnsResponseData {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsResponseData.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsResponseData = ReturnRefund202309SearchReturnsResponseData;
ReturnRefund202309SearchReturnsResponseData.discriminator = undefined;
ReturnRefund202309SearchReturnsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "returnOrders",
        "baseName": "return_orders",
        "type": "Array<ReturnRefund202309SearchReturnsResponseDataReturnOrders>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchReturnsResponseData.js.map