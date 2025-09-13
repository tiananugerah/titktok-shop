import { Product202309CheckProductListingResponseDataDiagnosesDiagnosisResults } from './CheckProductListingResponseDataDiagnosesDiagnosisResults';
import { Product202309CheckProductListingResponseDataDiagnosesSuggestions } from './CheckProductListingResponseDataDiagnosesSuggestions';
export declare class Product202309CheckProductListingResponseDataDiagnoses {
    'diagnosisResults'?: Array<Product202309CheckProductListingResponseDataDiagnosesDiagnosisResults>;
    'field'?: string;
    'suggestions'?: Product202309CheckProductListingResponseDataDiagnosesSuggestions;
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
//# sourceMappingURL=CheckProductListingResponseDataDiagnoses.d.ts.map