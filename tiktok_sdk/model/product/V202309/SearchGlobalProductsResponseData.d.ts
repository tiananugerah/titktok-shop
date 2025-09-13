import { Product202309SearchGlobalProductsResponseDataGlobalProducts } from './SearchGlobalProductsResponseDataGlobalProducts';
export declare class Product202309SearchGlobalProductsResponseData {
    'globalProducts'?: Array<Product202309SearchGlobalProductsResponseDataGlobalProducts>;
    'nextPageToken'?: string;
    'totalCount'?: number;
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
//# sourceMappingURL=SearchGlobalProductsResponseData.d.ts.map