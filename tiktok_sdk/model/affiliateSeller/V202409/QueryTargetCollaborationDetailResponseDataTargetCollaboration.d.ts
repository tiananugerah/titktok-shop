import { AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationCreators } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationCreators';
import { AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationFreeSampleRule } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationFreeSampleRule';
import { AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts';
import { AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationSellerContactInfo } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationSellerContactInfo';
export declare class AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaboration {
    'contentCreatorCount'?: number;
    'creatorInvitedCount'?: number;
    'creators'?: Array<AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationCreators>;
    'endTime'?: number;
    'freeSampleRule'?: AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationFreeSampleRule;
    'id'?: string;
    'message'?: string;
    'name'?: string;
    'productCount'?: number;
    'products'?: Array<AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts>;
    'sellerContactInfo'?: AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationSellerContactInfo;
    'showcaseCreatorCount'?: number;
    'startTime'?: number;
    'type'?: string;
    'updateTime'?: number;
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
//# sourceMappingURL=QueryTargetCollaborationDetailResponseDataTargetCollaboration.d.ts.map