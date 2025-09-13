import { AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodyCategory } from './CreatorSearchOpenCollaborationProductRequestBodyCategory';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodyCommissionRateRange } from './CreatorSearchOpenCollaborationProductRequestBodyCommissionRateRange';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodySalesPriceRange } from './CreatorSearchOpenCollaborationProductRequestBodySalesPriceRange';
export declare class AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody {
    'category'?: AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodyCategory;
    'commissionRateRange'?: AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodyCommissionRateRange;
    'salesPriceRange'?: AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodySalesPriceRange;
    'titleKeywords'?: Array<string>;
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
//# sourceMappingURL=CreatorSearchOpenCollaborationProductRequestBody.d.ts.map