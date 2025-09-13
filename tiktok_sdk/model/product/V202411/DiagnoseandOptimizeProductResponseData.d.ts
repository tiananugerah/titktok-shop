import { Product202411DiagnoseandOptimizeProductResponseDataDiagnoses } from './DiagnoseandOptimizeProductResponseDataDiagnoses';
import { Product202411DiagnoseandOptimizeProductResponseDataListingQuality } from './DiagnoseandOptimizeProductResponseDataListingQuality';
export declare class Product202411DiagnoseandOptimizeProductResponseData {
    'diagnoses'?: Array<Product202411DiagnoseandOptimizeProductResponseDataDiagnoses>;
    'listingQuality'?: Product202411DiagnoseandOptimizeProductResponseDataListingQuality;
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
//# sourceMappingURL=DiagnoseandOptimizeProductResponseData.d.ts.map