import { Product202309EditGlobalProductResponseDataGlobalSkus } from './EditGlobalProductResponseDataGlobalSkus';
import { Product202309EditGlobalProductResponseDataPublishResults } from './EditGlobalProductResponseDataPublishResults';
export declare class Product202309EditGlobalProductResponseData {
    'globalSkus'?: Array<Product202309EditGlobalProductResponseDataGlobalSkus>;
    'publishResults'?: Array<Product202309EditGlobalProductResponseDataPublishResults>;
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
//# sourceMappingURL=EditGlobalProductResponseData.d.ts.map