import { Fulfillment202309SearchPackageResponseDataPackages } from './SearchPackageResponseDataPackages';
export declare class Fulfillment202309SearchPackageResponseData {
    'nextPageToken'?: string;
    'packages'?: Array<Fulfillment202309SearchPackageResponseDataPackages>;
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
//# sourceMappingURL=SearchPackageResponseData.d.ts.map