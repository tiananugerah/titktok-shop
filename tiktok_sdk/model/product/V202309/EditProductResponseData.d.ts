import { Product202309EditProductResponseDataAudit } from './EditProductResponseDataAudit';
import { Product202309EditProductResponseDataSkus } from './EditProductResponseDataSkus';
import { Product202309EditProductResponseDataWarnings } from './EditProductResponseDataWarnings';
export declare class Product202309EditProductResponseData {
    'audit'?: Product202309EditProductResponseDataAudit;
    'productId'?: string;
    'skus'?: Array<Product202309EditProductResponseDataSkus>;
    'warnings'?: Array<Product202309EditProductResponseDataWarnings>;
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
//# sourceMappingURL=EditProductResponseData.d.ts.map