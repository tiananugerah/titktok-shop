import { Product202309PartialEditProductResponseDataAudit } from './PartialEditProductResponseDataAudit';
import { Product202309PartialEditProductResponseDataSkus } from './PartialEditProductResponseDataSkus';
export declare class Product202309PartialEditProductResponseData {
    'audit'?: Product202309PartialEditProductResponseDataAudit;
    'productId'?: string;
    'skus'?: Array<Product202309PartialEditProductResponseDataSkus>;
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
//# sourceMappingURL=PartialEditProductResponseData.d.ts.map