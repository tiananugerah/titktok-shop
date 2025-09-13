import { Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate } from './GetCategoryRulesResponseDataProductCertificationsExpirationDate';
import { Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions } from './GetCategoryRulesResponseDataProductCertificationsRequirementConditions';
export declare class Product202309GetCategoryRulesResponseDataProductCertifications {
    'documentDetails'?: string;
    'expirationDate'?: Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate;
    'id'?: string;
    'isRequired'?: boolean;
    'name'?: string;
    'requirementConditions'?: Array<Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions>;
    'sampleImageUrl'?: string;
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
//# sourceMappingURL=GetCategoryRulesResponseDataProductCertifications.d.ts.map