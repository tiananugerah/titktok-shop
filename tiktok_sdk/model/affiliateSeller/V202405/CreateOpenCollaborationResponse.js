"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405CreateOpenCollaborationResponse = void 0;
class AffiliateSeller202405CreateOpenCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202405CreateOpenCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202405CreateOpenCollaborationResponse = AffiliateSeller202405CreateOpenCollaborationResponse;
AffiliateSeller202405CreateOpenCollaborationResponse.discriminator = undefined;
AffiliateSeller202405CreateOpenCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202405CreateOpenCollaborationResponseData"
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
//# sourceMappingURL=CreateOpenCollaborationResponse.js.map