import { Product202409SearchManufacturersResponseDataManufacturers } from './SearchManufacturersResponseDataManufacturers';
export declare class Product202409SearchManufacturersResponseData {
    'manufacturers'?: Array<Product202409SearchManufacturersResponseDataManufacturers>;
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
//# sourceMappingURL=SearchManufacturersResponseData.d.ts.map