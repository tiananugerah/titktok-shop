import { Product202502SearchProductsResponseDataProducts } from './SearchProductsResponseDataProducts';
export declare class Product202502SearchProductsResponseData {
    'nextPageToken'?: string;
    'products'?: Array<Product202502SearchProductsResponseDataProducts>;
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