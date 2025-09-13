import { Product202309SearchGlobalProductsResponseDataGlobalProductsSkus } from './SearchGlobalProductsResponseDataGlobalProductsSkus';
export declare class Product202309SearchGlobalProductsResponseDataGlobalProducts {
    'createTime'?: number;
    'id'?: string;
    'skus'?: Array<Product202309SearchGlobalProductsResponseDataGlobalProductsSkus>;
    'status'?: string;
    'title'?: string;
    'updateTime'?: number;
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
//# sourceMappingURL=SearchGlobalProductsResponseDataGlobalProducts.d.ts.map