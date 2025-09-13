import { Fulfillment202309GetPackageDetailResponseData } from './GetPackageDetailResponseData';
export declare class Fulfillment202309GetPackageDetailResponse {
    'code'?: number;
    'data'?: Fulfillment202309GetPackageDetailResponseData;
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
//# sourceMappingURL=GetPackageDetailResponse.d.ts.map