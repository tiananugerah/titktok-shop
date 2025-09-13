import { Product202309PublishGlobalProductResponseDataProductsSkus } from './PublishGlobalProductResponseDataProductsSkus';
export declare class Product202309PublishGlobalProductResponseDataProducts {
    'id'?: string;
    'region'?: string;
    'shopId'?: string;
    'skus'?: Array<Product202309PublishGlobalProductResponseDataProductsSkus>;
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
//# sourceMappingURL=PublishGlobalProductResponseDataProducts.d.ts.map