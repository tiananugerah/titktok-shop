import { AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission } from './SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission';
import { AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct } from './SearchOpenCollaborationResponseDataOpenCollaborationsProduct';
export declare class AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations {
    'contentCreatorCount'?: number;
    'currentCommission'?: AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission;
    'id'?: string;
    'product'?: AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct;
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