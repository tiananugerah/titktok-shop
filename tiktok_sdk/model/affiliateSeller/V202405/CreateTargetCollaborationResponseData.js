"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405CreateTargetCollaborationResponseData = void 0;
class AffiliateSeller202405CreateTargetCollaborationResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202405CreateTargetCollaborationResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202405CreateTargetCollaborationResponseData = AffiliateSeller202405CreateTargetCollaborationResponseData;
AffiliateSeller202405CreateTargetCollaborationResponseData.discriminator = undefined;
AffiliateSeller202405CreateTargetCollaborationResponseData.attributeTypeMap = [
    {
        "name": "targetCollaboration",
        "baseName": "target_collaboration",
        "type": "AffiliateSeller202405CreateTargetCollaborationResponseDataTargetCollaboration"
    },
    {
        "name": "targetCollaborationConflicts",
        "baseName": "target_collaboration_conflicts",
        "type": "Array<AffiliateSeller202405CreateTargetCollaborationResponseDataTargetCollaborationConflicts>"
    }
];
//# sourceMappingURL=CreateTargetCollaborationResponseData.js.map