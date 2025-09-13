import { Product202309GetProductResponseDataProductAttributesValues } from './GetProductResponseDataProductAttributesValues';
export declare class Product202309GetProductResponseDataProductAttributes {
    'id'?: string;
    'name'?: string;
    'values'?: Array<Product202309GetProductResponseDataProductAttributesValues>;
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
//# sourceMappingURL=GetProductResponseDataProductAttributes.d.ts.map