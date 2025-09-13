import { Product202411DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults } from './DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults';
import { Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion } from './DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion';
export declare class Product202411DiagnoseandOptimizeProductResponseDataDiagnoses {
    'diagnosisResults'?: Array<Product202411DiagnoseandOptimizeProductResponseDataDiagnosesDiagnosisResults>;
    'field'?: string;
    'suggestion'?: Product202411DiagnoseandOptimizeProductResponseDataDiagnosesSuggestion;
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
//# sourceMappingURL=DiagnoseandOptimizeProductResponseDataDiagnoses.d.ts.map