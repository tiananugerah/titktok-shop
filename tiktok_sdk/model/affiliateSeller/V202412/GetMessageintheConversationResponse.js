"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetMessageintheConversationResponse = void 0;
class AffiliateSeller202412GetMessageintheConversationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetMessageintheConversationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetMessageintheConversationResponse = AffiliateSeller202412GetMessageintheConversationResponse;
AffiliateSeller202412GetMessageintheConversationResponse.discriminator = undefined;
AffiliateSeller202412GetMessageintheConversationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412GetMessageintheConversationResponseData"
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
//# sourceMappingURL=GetMessageintheConversationResponse.js.map