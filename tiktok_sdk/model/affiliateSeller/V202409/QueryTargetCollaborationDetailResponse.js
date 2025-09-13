"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409QueryTargetCollaborationDetailResponse = void 0;
class AffiliateSeller202409QueryTargetCollaborationDetailResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409QueryTargetCollaborationDetailResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409QueryTargetCollaborationDetailResponse = AffiliateSeller202409QueryTargetCollaborationDetailResponse;
AffiliateSeller202409QueryTargetCollaborationDetailResponse.discriminator = undefined;
AffiliateSeller202409QueryTargetCollaborationDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202409QueryTargetCollaborationDetailResponseData"
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
//# sourceMappingURL=QueryTargetCollaborationDetailResponse.js.map