import { Product202309GetAttributesResponseDataAttributesRequirementConditions } from './GetAttributesResponseDataAttributesRequirementConditions';
import { Product202309GetAttributesResponseDataAttributesValues } from './GetAttributesResponseDataAttributesValues';
export declare class Product202309GetAttributesResponseDataAttributes {
    'id'?: string;
    'isCustomizable'?: boolean;
    'isMultipleSelection'?: boolean;
    'isRequried'?: boolean;
    'name'?: string;
    'requirementConditions'?: Array<Product202309GetAttributesResponseDataAttributesRequirementConditions>;
    'type'?: string;
    'valueDataFormat'?: string;
    'values'?: Array<Product202309GetAttributesResponseDataAttributesValues>;
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
//# sourceMappingURL=GetAttributesResponseDataAttributes.d.ts.map