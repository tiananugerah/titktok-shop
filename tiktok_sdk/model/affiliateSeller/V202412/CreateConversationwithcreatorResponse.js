"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412CreateConversationwithcreatorResponse = void 0;
class AffiliateSeller202412CreateConversationwithcreatorResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412CreateConversationwithcreatorResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412CreateConversationwithcreatorResponse = AffiliateSeller202412CreateConversationwithcreatorResponse;
AffiliateSeller202412CreateConversationwithcreatorResponse.discriminator = undefined;
AffiliateSeller202412CreateConversationwithcreatorResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412CreateConversationwithcreatorResponseData"
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
//# sourceMappingURL=CreateConversationwithcreatorResponse.js.map