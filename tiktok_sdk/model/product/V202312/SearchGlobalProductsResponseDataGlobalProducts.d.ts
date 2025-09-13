import { Product202312SearchGlobalProductsResponseDataGlobalProductsSkus } from './SearchGlobalProductsResponseDataGlobalProductsSkus';
export declare class Product202312SearchGlobalProductsResponseDataGlobalProducts {
    'createTime'?: number;
    'id'?: string;
    'skus'?: Array<Product202312SearchGlobalProductsResponseDataGlobalProductsSkus>;
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