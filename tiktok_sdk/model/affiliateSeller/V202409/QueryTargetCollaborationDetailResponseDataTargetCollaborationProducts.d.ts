import { AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission';
import { AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice';
export declare class AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts {
    'collaborationStatus'?: string;
    'commission'?: AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission;
    'commissionEffectiveStatus'?: string;
    'id'?: string;
    'mainImageUrl'?: string;
    'originalPrice'?: AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice;
    'status'?: string;
    'title'?: string;
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
//# sourceMappingURL=QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.d.ts.map