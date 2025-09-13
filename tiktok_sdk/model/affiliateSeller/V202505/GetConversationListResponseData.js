"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202505GetConversationListResponseData = void 0;
class AffiliateSeller202505GetConversationListResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202505GetConversationListResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202505GetConversationListResponseData = AffiliateSeller202505GetConversationListResponseData;
AffiliateSeller202505GetConversationListResponseData.discriminator = undefined;
AffiliateSeller202505GetConversationListResponseData.attributeTypeMap = [
    {
        "name": "conversations",
        "baseName": "conversations",
        "type": "Array<AffiliateSeller202505GetConversationListResponseDataConversations>"
    },
    {
        "name": "hasMore",
        "baseName": "has_more",
        "type": "boolean"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    }
];
//# sourceMappingURL=GetConversationListResponseData.js.map