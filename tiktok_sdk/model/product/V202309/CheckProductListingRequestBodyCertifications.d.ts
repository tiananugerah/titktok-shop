import { Product202309CheckProductListingRequestBodyCertificationsFiles } from './CheckProductListingRequestBodyCertificationsFiles';
import { Product202309CheckProductListingRequestBodyCertificationsImages } from './CheckProductListingRequestBodyCertificationsImages';
export declare class Product202309CheckProductListingRequestBodyCertifications {
    'expirationDate'?: number;
    'files'?: Array<Product202309CheckProductListingRequestBodyCertificationsFiles>;
    'id'?: string;
    'images'?: Array<Product202309CheckProductListingRequestBodyCertificationsImages>;
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
//# sourceMappingURL=CheckProductListingRequestBodyCertifications.d.ts.map