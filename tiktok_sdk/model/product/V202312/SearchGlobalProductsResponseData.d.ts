import { Product202312SearchGlobalProductsResponseDataGlobalProducts } from './SearchGlobalProductsResponseDataGlobalProducts';
export declare class Product202312SearchGlobalProductsResponseData {
    'globalProducts'?: Array<Product202312SearchGlobalProductsResponseDataGlobalProducts>;
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