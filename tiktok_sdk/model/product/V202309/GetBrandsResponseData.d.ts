import { Product202309GetBrandsResponseDataBrands } from './GetBrandsResponseDataBrands';
export declare class Product202309GetBrandsResponseData {
    'brands'?: Array<Product202309GetBrandsResponseDataBrands>;
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
//# sourceMappingURL=GetBrandsResponseData.d.ts.map