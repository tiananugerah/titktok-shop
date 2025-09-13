import { Product202309PartialEditProductRequestBodyCertificationsFiles } from './PartialEditProductRequestBodyCertificationsFiles';
import { Product202309PartialEditProductRequestBodyCertificationsImages } from './PartialEditProductRequestBodyCertificationsImages';
export declare class Product202309PartialEditProductRequestBodyCertifications {
    'expirationDate'?: number;
    'files'?: Array<Product202309PartialEditProductRequestBodyCertificationsFiles>;
    'id'?: string;
    'images'?: Array<Product202309PartialEditProductRequestBodyCertificationsImages>;
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
//# sourceMappingURL=PartialEditProductRequestBodyCertifications.d.ts.map