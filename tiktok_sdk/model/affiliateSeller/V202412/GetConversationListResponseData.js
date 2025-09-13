"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetConversationListResponseData = void 0;
class AffiliateSeller202412GetConversationListResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetConversationListResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetConversationListResponseData = AffiliateSeller202412GetConversationListResponseData;
AffiliateSeller202412GetConversationListResponseData.discriminator = undefined;
AffiliateSeller202412GetConversationListResponseData.attributeTypeMap = [
    {
        "name": "conversations",
        "baseName": "conversations",
        "type": "Array<AffiliateSeller202412GetConversationListResponseDataConversations>"
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