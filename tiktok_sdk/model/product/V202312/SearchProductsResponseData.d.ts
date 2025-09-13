import { Product202312SearchProductsResponseDataProducts } from './SearchProductsResponseDataProducts';
export declare class Product202312SearchProductsResponseData {
    'nextPageToken'?: string;
    'products'?: Array<Product202312SearchProductsResponseDataProducts>;
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