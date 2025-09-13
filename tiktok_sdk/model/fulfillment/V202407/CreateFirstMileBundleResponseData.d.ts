import { Fulfillment202407CreateFirstMileBundleResponseDataErrors } from './CreateFirstMileBundleResponseDataErrors';
export declare class Fulfillment202407CreateFirstMileBundleResponseData {
    'errors'?: Array<Fulfillment202407CreateFirstMileBundleResponseDataErrors>;
    'firstMileBundleId'?: string;
    'url'?: string;
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
//# sourceMappingURL=CreateFirstMileBundleResponseData.d.ts.map