import { Product202309CreateProductResponseDataSkus } from './CreateProductResponseDataSkus';
import { Product202309CreateProductResponseDataWarnings } from './CreateProductResponseDataWarnings';
export declare class Product202309CreateProductResponseData {
    'productId'?: string;
    'skus'?: Array<Product202309CreateProductResponseDataSkus>;
    'warnings'?: Array<Product202309CreateProductResponseDataWarnings>;
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
//# sourceMappingURL=CreateProductResponseData.d.ts.map