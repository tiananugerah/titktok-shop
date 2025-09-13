"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409UpdateTargetCollaborationResponse = void 0;
class AffiliateSeller202409UpdateTargetCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409UpdateTargetCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409UpdateTargetCollaborationResponse = AffiliateSeller202409UpdateTargetCollaborationResponse;
AffiliateSeller202409UpdateTargetCollaborationResponse.discriminator = undefined;
AffiliateSeller202409UpdateTargetCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202409UpdateTargetCollaborationResponseData"
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
//# sourceMappingURL=UpdateTargetCollaborationResponse.js.map