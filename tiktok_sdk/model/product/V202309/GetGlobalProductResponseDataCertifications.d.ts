import { Product202309GetGlobalProductResponseDataCertificationsFiles } from './GetGlobalProductResponseDataCertificationsFiles';
import { Product202309GetGlobalProductResponseDataCertificationsImages } from './GetGlobalProductResponseDataCertificationsImages';
export declare class Product202309GetGlobalProductResponseDataCertifications {
    'files'?: Array<Product202309GetGlobalProductResponseDataCertificationsFiles>;
    'id'?: string;
    'images'?: Array<Product202309GetGlobalProductResponseDataCertificationsImages>;
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
//# sourceMappingURL=GetGlobalProductResponseDataCertifications.d.ts.map