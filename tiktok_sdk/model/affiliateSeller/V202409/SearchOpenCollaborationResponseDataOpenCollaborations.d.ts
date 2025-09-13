import { AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission } from './SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission';
import { AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct } from './SearchOpenCollaborationResponseDataOpenCollaborationsProduct';
export declare class AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations {
    'contentCreatorCount'?: number;
    'currentCommission'?: AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission;
    'id'?: string;
    'product'?: AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct;
    'requireSellerApproveCreator'?: boolean;
    'showcaseCreatorCount'?: number;
    'status'?: string;
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
//# sourceMappingURL=SearchOpenCollaborationResponseDataOpenCollaborations.d.ts.map