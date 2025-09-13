import { AffiliateSeller202409UpdateTargetCollaborationRequestBodyFreeSampleRule } from './UpdateTargetCollaborationRequestBodyFreeSampleRule';
import { AffiliateSeller202409UpdateTargetCollaborationRequestBodyProducts } from './UpdateTargetCollaborationRequestBodyProducts';
import { AffiliateSeller202409UpdateTargetCollaborationRequestBodySellerContactInfo } from './UpdateTargetCollaborationRequestBodySellerContactInfo';
export declare class AffiliateSeller202409UpdateTargetCollaborationRequestBody {
    'creatorUserIds'?: Array<string>;
    'endTime'?: string;
    'freeSampleRule'?: AffiliateSeller202409UpdateTargetCollaborationRequestBodyFreeSampleRule;
    'name'?: string;
    'products'?: Array<AffiliateSeller202409UpdateTargetCollaborationRequestBodyProducts>;
    'sellerContactInfo'?: AffiliateSeller202409UpdateTargetCollaborationRequestBodySellerContactInfo;
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
//# sourceMappingURL=UpdateTargetCollaborationRequestBody.d.ts.map