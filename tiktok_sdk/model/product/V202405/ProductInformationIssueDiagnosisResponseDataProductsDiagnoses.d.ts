import { Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults } from './ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults';
import { Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion } from './ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion';
export declare class Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses {
    'diagnosisResults'?: Array<Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults>;
    'field'?: string;
    'suggestion'?: Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion;
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
//# sourceMappingURL=ProductInformationIssueDiagnosisResponseDataProductsDiagnoses.d.ts.map