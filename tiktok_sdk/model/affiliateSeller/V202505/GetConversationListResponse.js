"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202505GetConversationListResponse = void 0;
class AffiliateSeller202505GetConversationListResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202505GetConversationListResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202505GetConversationListResponse = AffiliateSeller202505GetConversationListResponse;
AffiliateSeller202505GetConversationListResponse.discriminator = undefined;
AffiliateSeller202505GetConversationListResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202505GetConversationListResponseData"
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