import { AffiliateSeller202405CreateTargetCollaborationRequestBodyFreeSampleRule } from './CreateTargetCollaborationRequestBodyFreeSampleRule';
import { AffiliateSeller202405CreateTargetCollaborationRequestBodyProducts } from './CreateTargetCollaborationRequestBodyProducts';
import { AffiliateSeller202405CreateTargetCollaborationRequestBodySellerContactInfo } from './CreateTargetCollaborationRequestBodySellerContactInfo';
export declare class AffiliateSeller202405CreateTargetCollaborationRequestBody {
    'creatorUserIds'?: Array<string>;
    'endTime'?: string;
    'freeSampleRule'?: AffiliateSeller202405CreateTargetCollaborationRequestBodyFreeSampleRule;
    'message'?: string;
    'name'?: string;
    'products'?: Array<AffiliateSeller202405CreateTargetCollaborationRequestBodyProducts>;
    'sellerContactInfo'?: AffiliateSeller202405CreateTargetCollaborationRequestBodySellerContactInfo;
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
//# sourceMappingURL=CreateTargetCollaborationRequestBody.d.ts.map