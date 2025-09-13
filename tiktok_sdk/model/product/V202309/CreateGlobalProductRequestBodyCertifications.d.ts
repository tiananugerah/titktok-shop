import { Product202309CreateGlobalProductRequestBodyCertificationsFiles } from './CreateGlobalProductRequestBodyCertificationsFiles';
import { Product202309CreateGlobalProductRequestBodyCertificationsImages } from './CreateGlobalProductRequestBodyCertificationsImages';
export declare class Product202309CreateGlobalProductRequestBodyCertifications {
    'files'?: Array<Product202309CreateGlobalProductRequestBodyCertificationsFiles>;
    'id'?: string;
    'images'?: Array<Product202309CreateGlobalProductRequestBodyCertificationsImages>;
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
//# sourceMappingURL=CreateGlobalProductRequestBodyCertifications.d.ts.map