import { Product202309SearchProductsResponseDataProducts } from './SearchProductsResponseDataProducts';
export declare class Product202309SearchProductsResponseData {
    'nextPageToken'?: string;
    'products'?: Array<Product202309SearchProductsResponseDataProducts>;
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
//# sourceMappingURL=SearchProductsResponseData.d.ts.map