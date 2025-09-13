import { AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListPrice } from './GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListPrice';
import { AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListSaleProperties } from './GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListSaleProperties';
export declare class AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList {
    'id'?: string;
    'isAvailable'?: boolean;
    'price'?: AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListPrice;
    'saleProperties'?: Array<AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListSaleProperties>;
    'salePropertyValueIds'?: string;
    'unavailableReason'?: string;
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
//# sourceMappingURL=GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList.d.ts.map