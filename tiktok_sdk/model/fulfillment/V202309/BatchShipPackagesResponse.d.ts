import { Fulfillment202309BatchShipPackagesResponseData } from './BatchShipPackagesResponseData';
export declare class Fulfillment202309BatchShipPackagesResponse {
    'code'?: number;
    'data'?: Fulfillment202309BatchShipPackagesResponseData;
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
//# sourceMappingURL=BatchShipPackagesResponse.d.ts.map