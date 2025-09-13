import { Product202309CheckProductListingResponseDataDiagnosesSuggestionsImages } from './CheckProductListingResponseDataDiagnosesSuggestionsImages';
import { Product202309CheckProductListingResponseDataDiagnosesSuggestionsSeoWords } from './CheckProductListingResponseDataDiagnosesSuggestionsSeoWords';
import { Product202309CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts } from './CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts';
export declare class Product202309CheckProductListingResponseDataDiagnosesSuggestions {
    'images'?: Array<Product202309CheckProductListingResponseDataDiagnosesSuggestionsImages>;
    'seoWords'?: Array<Product202309CheckProductListingResponseDataDiagnosesSuggestionsSeoWords>;
    'smartTexts'?: Array<Product202309CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts>;
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
//# sourceMappingURL=CheckProductListingResponseDataDiagnosesSuggestions.d.ts.map