import { AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails } from './GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails';
import { AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataProduct } from './GetOpenCollaborationCreatorContentDetailResponseDataProduct';
export declare class AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData {
    'creatorContentDetails'?: Array<AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails>;
    'nextPageToken'?: string;
    'product'?: AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataProduct;
    'totalCount'?: number;
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
//# sourceMappingURL=GetOpenCollaborationCreatorContentDetailResponseData.d.ts.map