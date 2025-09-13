import { Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses } from './ProductInformationIssueDiagnosisResponseDataProductsDiagnoses';
import { Product202405ProductInformationIssueDiagnosisResponseDataProductsListingQuality } from './ProductInformationIssueDiagnosisResponseDataProductsListingQuality';
export declare class Product202405ProductInformationIssueDiagnosisResponseDataProducts {
    'diagnoses'?: Array<Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses>;
    'id'?: string;
    'listingQuality'?: Product202405ProductInformationIssueDiagnosisResponseDataProductsListingQuality;
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
//# sourceMappingURL=ProductInformationIssueDiagnosisResponseDataProducts.d.ts.map