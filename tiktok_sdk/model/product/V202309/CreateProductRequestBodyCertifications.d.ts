import { Product202309CreateProductRequestBodyCertificationsFiles } from './CreateProductRequestBodyCertificationsFiles';
import { Product202309CreateProductRequestBodyCertificationsImages } from './CreateProductRequestBodyCertificationsImages';
export declare class Product202309CreateProductRequestBodyCertifications {
    'expirationDate'?: number;
    'files'?: Array<Product202309CreateProductRequestBodyCertificationsFiles>;
    'id'?: string;
    'images'?: Array<Product202309CreateProductRequestBodyCertificationsImages>;
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
//# sourceMappingURL=CreateProductRequestBodyCertifications.d.ts.map