import { Product202309GetGlobalProductResponseDataProductAttributesValues } from './GetGlobalProductResponseDataProductAttributesValues';
export declare class Product202309GetGlobalProductResponseDataProductAttributes {
    'id'?: string;
    'name'?: string;
    'values'?: Array<Product202309GetGlobalProductResponseDataProductAttributesValues>;
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
//# sourceMappingURL=GetGlobalProductResponseDataProductAttributes.d.ts.map