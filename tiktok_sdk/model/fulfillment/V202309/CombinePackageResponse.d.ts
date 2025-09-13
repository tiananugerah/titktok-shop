import { Fulfillment202309CombinePackageResponseData } from './CombinePackageResponseData';
export declare class Fulfillment202309CombinePackageResponse {
    'code'?: number;
    'data'?: Fulfillment202309CombinePackageResponseData;
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
//# sourceMappingURL=CombinePackageResponse.d.ts.map