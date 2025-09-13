import { Fulfillment202309SearchPackageResponseData } from './SearchPackageResponseData';
export declare class Fulfillment202309SearchPackageResponse {
    'code'?: number;
    'data'?: Fulfillment202309SearchPackageResponseData;
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
//# sourceMappingURL=SearchPackageResponse.d.ts.map