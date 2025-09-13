"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetConversationListResponse = void 0;
class AffiliateSeller202412GetConversationListResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetConversationListResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetConversationListResponse = AffiliateSeller202412GetConversationListResponse;
AffiliateSeller202412GetConversationListResponse.discriminator = undefined;
AffiliateSeller202412GetConversationListResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412GetConversationListResponseData"
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
//# sourceMappingURL=GetConversationListResponse.js.map