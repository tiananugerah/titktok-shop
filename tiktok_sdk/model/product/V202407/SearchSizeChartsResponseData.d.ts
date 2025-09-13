import { Product202407SearchSizeChartsResponseDataSizeChart } from './SearchSizeChartsResponseDataSizeChart';
export declare class Product202407SearchSizeChartsResponseData {
    'nextPageToken'?: string;
    'sizeChart'?: Array<Product202407SearchSizeChartsResponseDataSizeChart>;
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
//# sourceMappingURL=SearchSizeChartsResponseData.d.ts.map