import { AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations } from './SearchOpenCollaborationResponseDataOpenCollaborations';
export declare class AffiliateSeller202409SearchOpenCollaborationResponseData {
    'nextPageToken'?: string;
    'openCollaborations'?: Array<AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations>;
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
//# sourceMappingURL=SearchOpenCollaborationResponseData.d.ts.map