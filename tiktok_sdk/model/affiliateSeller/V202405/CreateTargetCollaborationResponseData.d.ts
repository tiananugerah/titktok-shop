import { AffiliateSeller202405CreateTargetCollaborationResponseDataTargetCollaboration } from './CreateTargetCollaborationResponseDataTargetCollaboration';
import { AffiliateSeller202405CreateTargetCollaborationResponseDataTargetCollaborationConflicts } from './CreateTargetCollaborationResponseDataTargetCollaborationConflicts';
export declare class AffiliateSeller202405CreateTargetCollaborationResponseData {
    'targetCollaboration'?: AffiliateSeller202405CreateTargetCollaborationResponseDataTargetCollaboration;
    'targetCollaborationConflicts'?: Array<AffiliateSeller202405CreateTargetCollaborationResponseDataTargetCollaborationConflicts>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
//# sourceMappingURL=CreateTargetCollaborationResponseData.d.ts.map