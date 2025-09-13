import { Product202501SearchManufacturersResponseData } from './SearchManufacturersResponseData';
export declare class Product202501SearchManufacturersResponse {
    'code'?: number;
    'data'?: Product202501SearchManufacturersResponseData;
    'message'?: string;
    'requestId'?: string;
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
//# sourceMappingURL=SearchManufacturersResponse.d.ts.map