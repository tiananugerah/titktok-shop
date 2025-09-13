"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409UpdateTargetCollaborationResponseData = void 0;
class AffiliateSeller202409UpdateTargetCollaborationResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202409UpdateTargetCollaborationResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202409UpdateTargetCollaborationResponseData = AffiliateSeller202409UpdateTargetCollaborationResponseData;
AffiliateSeller202409UpdateTargetCollaborationResponseData.discriminator = undefined;
AffiliateSeller202409UpdateTargetCollaborationResponseData.attributeTypeMap = [
    {
        "name": "targetCollaborationConflicts",
        "baseName": "target_collaboration_conflicts",
        "type": "Array<AffiliateSeller202409UpdateTargetCollaborationResponseDataTargetCollaborationConflicts>"
    },
    {
        "name": "updateFailed",
        "baseName": "update_failed",
        "type": "AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed"
    }
];
//# sourceMappingURL=UpdateTargetCollaborationResponseData.js.map