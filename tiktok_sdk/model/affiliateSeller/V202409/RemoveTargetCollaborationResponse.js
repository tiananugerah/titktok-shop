"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409RemoveTargetCollaborationResponse = void 0;
class AffiliateSeller202409RemoveTargetCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409RemoveTargetCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409RemoveTargetCollaborationResponse = AffiliateSeller202409RemoveTargetCollaborationResponse;
AffiliateSeller202409RemoveTargetCollaborationResponse.discriminator = undefined;
AffiliateSeller202409RemoveTargetCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=RemoveTargetCollaborationResponse.js.map