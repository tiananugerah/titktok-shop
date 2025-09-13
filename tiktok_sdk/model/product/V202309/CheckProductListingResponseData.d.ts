import { Product202309CheckProductListingResponseDataDiagnoses } from './CheckProductListingResponseDataDiagnoses';
import { Product202309CheckProductListingResponseDataFailReasons } from './CheckProductListingResponseDataFailReasons';
import { Product202309CheckProductListingResponseDataListingQuality } from './CheckProductListingResponseDataListingQuality';
import { Product202309CheckProductListingResponseDataWarnings } from './CheckProductListingResponseDataWarnings';
export declare class Product202309CheckProductListingResponseData {
    'checkResult'?: string;
    'diagnoses'?: Array<Product202309CheckProductListingResponseDataDiagnoses>;
    'failReasons'?: Array<Product202309CheckProductListingResponseDataFailReasons>;
    'listingQuality'?: Product202309CheckProductListingResponseDataListingQuality;
    'warnings'?: Product202309CheckProductListingResponseDataWarnings;
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
//# sourceMappingURL=CheckProductListingResponseData.d.ts.map