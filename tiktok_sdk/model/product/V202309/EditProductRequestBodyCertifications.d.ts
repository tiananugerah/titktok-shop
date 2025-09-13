import { Product202309EditProductRequestBodyCertificationsFiles } from './EditProductRequestBodyCertificationsFiles';
import { Product202309EditProductRequestBodyCertificationsImages } from './EditProductRequestBodyCertificationsImages';
export declare class Product202309EditProductRequestBodyCertifications {
    'expirationDate'?: number;
    'files'?: Array<Product202309EditProductRequestBodyCertificationsFiles>;
    'id'?: string;
    'images'?: Array<Product202309EditProductRequestBodyCertificationsImages>;
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
//# sourceMappingURL=EditProductRequestBodyCertifications.d.ts.map