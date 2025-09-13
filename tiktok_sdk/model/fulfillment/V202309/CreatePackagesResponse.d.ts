import { Fulfillment202309CreatePackagesResponseData } from './CreatePackagesResponseData';
export declare class Fulfillment202309CreatePackagesResponse {
    'code'?: number;
    'data'?: Fulfillment202309CreatePackagesResponseData;
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
//# sourceMappingURL=CreatePackagesResponse.d.ts.map