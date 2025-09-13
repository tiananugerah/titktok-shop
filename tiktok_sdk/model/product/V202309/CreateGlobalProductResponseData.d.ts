import { Product202309CreateGlobalProductResponseDataGlobalSkus } from './CreateGlobalProductResponseDataGlobalSkus';
export declare class Product202309CreateGlobalProductResponseData {
    'globalProductId'?: string;
    'globalSkus'?: Array<Product202309CreateGlobalProductResponseDataGlobalSkus>;
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
//# sourceMappingURL=CreateGlobalProductResponseData.d.ts.map