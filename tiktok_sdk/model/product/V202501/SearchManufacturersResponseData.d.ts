import { Product202501SearchManufacturersResponseDataManufacturers } from './SearchManufacturersResponseDataManufacturers';
export declare class Product202501SearchManufacturersResponseData {
    'manufacturers'?: Array<Product202501SearchManufacturersResponseDataManufacturers>;
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