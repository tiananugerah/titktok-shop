import { AffiliateSeller202409UpdateTargetCollaborationResponseDataTargetCollaborationConflicts } from './UpdateTargetCollaborationResponseDataTargetCollaborationConflicts';
import { AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed } from './UpdateTargetCollaborationResponseDataUpdateFailed';
export declare class AffiliateSeller202409UpdateTargetCollaborationResponseData {
    'targetCollaborationConflicts'?: Array<AffiliateSeller202409UpdateTargetCollaborationResponseDataTargetCollaborationConflicts>;
    'updateFailed'?: AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed;
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
//# sourceMappingURL=UpdateTargetCollaborationResponseData.d.ts.map