import { Product202309GetProductResponseDataCertificationsFiles } from './GetProductResponseDataCertificationsFiles';
import { Product202309GetProductResponseDataCertificationsImages } from './GetProductResponseDataCertificationsImages';
export declare class Product202309GetProductResponseDataCertifications {
    'expirationDate'?: number;
    'files'?: Array<Product202309GetProductResponseDataCertificationsFiles>;
    'id'?: string;
    'images'?: Array<Product202309GetProductResponseDataCertificationsImages>;
    'title'?: string;
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
//# sourceMappingURL=GetProductResponseDataCertifications.d.ts.map