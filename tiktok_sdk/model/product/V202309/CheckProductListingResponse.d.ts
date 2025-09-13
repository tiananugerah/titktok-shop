import { Product202309CheckProductListingResponseData } from './CheckProductListingResponseData';
export declare class Product202309CheckProductListingResponse {
    'code'?: number;
    'data'?: Product202309CheckProductListingResponseData;
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
//# sourceMappingURL=CheckProductListingResponse.d.ts.map