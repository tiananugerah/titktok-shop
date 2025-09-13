import { Fulfillment202309SearchCombinablePackagesResponseData } from './SearchCombinablePackagesResponseData';
export declare class Fulfillment202309SearchCombinablePackagesResponse {
    'code'?: number;
    'data'?: Fulfillment202309SearchCombinablePackagesResponseData;
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
//# sourceMappingURL=SearchCombinablePackagesResponse.d.ts.map