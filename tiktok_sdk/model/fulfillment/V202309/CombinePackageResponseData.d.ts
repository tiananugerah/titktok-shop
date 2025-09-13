import { Fulfillment202309CombinePackageResponseDataErrors } from './CombinePackageResponseDataErrors';
import { Fulfillment202309CombinePackageResponseDataPackages } from './CombinePackageResponseDataPackages';
export declare class Fulfillment202309CombinePackageResponseData {
    'errors'?: Array<Fulfillment202309CombinePackageResponseDataErrors>;
    'packages'?: Array<Fulfillment202309CombinePackageResponseDataPackages>;
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
//# sourceMappingURL=CombinePackageResponseData.d.ts.map