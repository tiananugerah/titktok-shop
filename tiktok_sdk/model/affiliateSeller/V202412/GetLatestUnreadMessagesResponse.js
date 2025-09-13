"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetLatestUnreadMessagesResponse = void 0;
class AffiliateSeller202412GetLatestUnreadMessagesResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetLatestUnreadMessagesResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetLatestUnreadMessagesResponse = AffiliateSeller202412GetLatestUnreadMessagesResponse;
AffiliateSeller202412GetLatestUnreadMessagesResponse.discriminator = undefined;
AffiliateSeller202412GetLatestUnreadMessagesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412GetLatestUnreadMessagesResponseData"
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
//# sourceMappingURL=GetLatestUnreadMessagesResponse.js.map