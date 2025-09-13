"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetMessageintheConversationResponseData = void 0;
class AffiliateSeller202412GetMessageintheConversationResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetMessageintheConversationResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetMessageintheConversationResponseData = AffiliateSeller202412GetMessageintheConversationResponseData;
AffiliateSeller202412GetMessageintheConversationResponseData.discriminator = undefined;
AffiliateSeller202412GetMessageintheConversationResponseData.attributeTypeMap = [
    {
        "name": "hasMore",
        "baseName": "has_more",
        "type": "boolean"
    },
    {
        "name": "messages",
        "baseName": "messages",
        "type": "Array<AffiliateSeller202412GetMessageintheConversationResponseDataMessages>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    }
];
//# sourceMappingURL=GetMessageintheConversationResponseData.js.map