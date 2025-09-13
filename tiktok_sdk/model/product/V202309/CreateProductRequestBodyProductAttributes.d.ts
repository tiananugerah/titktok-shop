import { Product202309CreateProductRequestBodyProductAttributesValues } from './CreateProductRequestBodyProductAttributesValues';
export declare class Product202309CreateProductRequestBodyProductAttributes {
    'id'?: string;
    'values'?: Array<Product202309CreateProductRequestBodyProductAttributesValues>;
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
//# sourceMappingURL=CreateProductRequestBodyProductAttributes.d.ts.map