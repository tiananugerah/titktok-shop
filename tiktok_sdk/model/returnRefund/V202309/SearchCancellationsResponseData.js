"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchCancellationsResponseData = void 0;
class ReturnRefund202309SearchCancellationsResponseData {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchCancellationsResponseData.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchCancellationsResponseData = ReturnRefund202309SearchCancellationsResponseData;
ReturnRefund202309SearchCancellationsResponseData.discriminator = undefined;
ReturnRefund202309SearchCancellationsResponseData.attributeTypeMap = [
    {
        "name": "cancellations",
        "baseName": "cancellations",
        "type": "Array<ReturnRefund202309SearchCancellationsResponseDataCancellations>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCancellationsResponseData.js.map