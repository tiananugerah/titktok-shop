"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList = void 0;
class AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList = AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList;
AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList.discriminator = undefined;
AffiliateSeller202412GetLatestUnreadMessagesResponseDataNewestMessageList.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "conversationId",
        "baseName": "conversation_id",
        "type": "string"
    },
    {
        "name": "senderId",
        "baseName": "sender_id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "unreadMessageCount",
        "baseName": "unread_message_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetLatestUnreadMessagesResponseDataNewestMessageList.js.map