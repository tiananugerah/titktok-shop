import { Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions } from './GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions';
export declare class Product202309GetGlobalCategoryRulesResponseDataProductCertifications {
    'id'?: string;
    'isRequired'?: boolean;
    'name'?: string;
    'optionalRegions'?: Array<string>;
    'requiredRegions'?: Array<string>;
    'requirementConditions'?: Array<Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions>;
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
//# sourceMappingURL=GetGlobalCategoryRulesResponseDataProductCertifications.d.ts.map