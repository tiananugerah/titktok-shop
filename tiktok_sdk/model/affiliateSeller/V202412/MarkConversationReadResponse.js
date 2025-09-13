"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412MarkConversationReadResponse = void 0;
class AffiliateSeller202412MarkConversationReadResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412MarkConversationReadResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412MarkConversationReadResponse = AffiliateSeller202412MarkConversationReadResponse;
AffiliateSeller202412MarkConversationReadResponse.discriminator = undefined;
AffiliateSeller202412MarkConversationReadResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412MarkConversationReadResponseData"
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
//# sourceMappingURL=MarkConversationReadResponse.js.map