"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410GetOpenCollaborationSampleRulesResponse = void 0;
class AffiliateSeller202410GetOpenCollaborationSampleRulesResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202410GetOpenCollaborationSampleRulesResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202410GetOpenCollaborationSampleRulesResponse = AffiliateSeller202410GetOpenCollaborationSampleRulesResponse;
AffiliateSeller202410GetOpenCollaborationSampleRulesResponse.discriminator = undefined;
AffiliateSeller202410GetOpenCollaborationSampleRulesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202410GetOpenCollaborationSampleRulesResponseData"
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
//# sourceMappingURL=GetOpenCollaborationSampleRulesResponse.js.map