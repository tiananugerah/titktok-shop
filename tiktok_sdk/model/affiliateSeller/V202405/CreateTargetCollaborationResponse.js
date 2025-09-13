"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405CreateTargetCollaborationResponse = void 0;
class AffiliateSeller202405CreateTargetCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202405CreateTargetCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202405CreateTargetCollaborationResponse = AffiliateSeller202405CreateTargetCollaborationResponse;
AffiliateSeller202405CreateTargetCollaborationResponse.discriminator = undefined;
AffiliateSeller202405CreateTargetCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202405CreateTargetCollaborationResponseData"
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
//# sourceMappingURL=CreateTargetCollaborationResponse.js.map