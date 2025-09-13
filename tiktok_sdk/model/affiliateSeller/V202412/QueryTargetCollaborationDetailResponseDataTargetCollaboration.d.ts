import { AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationCreators } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationCreators';
import { AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationFreeSampleRule } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationFreeSampleRule';
import { AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts';
import { AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationSellerContactInfo } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationSellerContactInfo';
export declare class AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration {
    'contentCreatorCount'?: number;
    'creatorInvitedCount'?: number;
    'creators'?: Array<AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationCreators>;
    'endTime'?: number;
    'freeSampleRule'?: AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationFreeSampleRule;
    'id'?: string;
    'message'?: string;
    'name'?: string;
    'productCount'?: number;
    'products'?: Array<AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts>;
    'sellerContactInfo'?: AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationSellerContactInfo;
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