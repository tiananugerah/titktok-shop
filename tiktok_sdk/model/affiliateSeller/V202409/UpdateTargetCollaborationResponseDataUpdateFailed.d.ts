import { AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedAddProducts } from './UpdateTargetCollaborationResponseDataUpdateFailedAddProducts';
import { AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions } from './UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions';
import { AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo } from './UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo';
export declare class AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed {
    'addCreatorIds'?: Array<string>;
    'addProducts'?: AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedAddProducts;
    'changeCommissions'?: AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions;
    'endTime'?: number;
    'name'?: string;
    'removeCreatorIds'?: Array<string>;
    'removeProductIds'?: Array<string>;
    'sellerContactInfo'?: AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo;
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
//# sourceMappingURL=UpdateTargetCollaborationResponseDataUpdateFailed.d.ts.map