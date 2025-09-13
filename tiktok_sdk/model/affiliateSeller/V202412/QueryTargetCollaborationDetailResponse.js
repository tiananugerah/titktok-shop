"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412QueryTargetCollaborationDetailResponse = void 0;
class AffiliateSeller202412QueryTargetCollaborationDetailResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412QueryTargetCollaborationDetailResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412QueryTargetCollaborationDetailResponse = AffiliateSeller202412QueryTargetCollaborationDetailResponse;
AffiliateSeller202412QueryTargetCollaborationDetailResponse.discriminator = undefined;
AffiliateSeller202412QueryTargetCollaborationDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412QueryTargetCollaborationDetailResponseData"
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