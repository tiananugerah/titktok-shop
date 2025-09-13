import { Product202309GetGlobalProductResponseDataProductsSkuMappings } from './GetGlobalProductResponseDataProductsSkuMappings';
export declare class Product202309GetGlobalProductResponseDataProducts {
    'id'?: string;
    'region'?: string;
    'skuMappings'?: Array<Product202309GetGlobalProductResponseDataProductsSkuMappings>;
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
//# sourceMappingURL=GetGlobalProductResponseDataProducts.d.ts.map