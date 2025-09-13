import { Product202309GetGlobalAttributesResponseDataAttributesRequirementConditions } from './GetGlobalAttributesResponseDataAttributesRequirementConditions';
import { Product202309GetGlobalAttributesResponseDataAttributesValues } from './GetGlobalAttributesResponseDataAttributesValues';
export declare class Product202309GetGlobalAttributesResponseDataAttributes {
    'id'?: string;
    'isCustomizable'?: boolean;
    'isMultipleSelection'?: boolean;
    'isRequried'?: boolean;
    'name'?: string;
    'optionalRegions'?: Array<string>;
    'requiredRegions'?: Array<string>;
    'requirementConditions'?: Array<Product202309GetGlobalAttributesResponseDataAttributesRequirementConditions>;
    'type'?: string;
    'values'?: Array<Product202309GetGlobalAttributesResponseDataAttributesValues>;
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
//# sourceMappingURL=GetGlobalAttributesResponseDataAttributes.d.ts.map