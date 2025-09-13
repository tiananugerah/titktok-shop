import { AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission';
import { AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice } from './QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice';
export declare class AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts {
    'collaborationStatus'?: string;
    'commission'?: AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission;
    'commissionEffectiveStatus'?: string;
    'id'?: string;
    'mainImageUrl'?: string;
    'originalPrice'?: AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice;
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