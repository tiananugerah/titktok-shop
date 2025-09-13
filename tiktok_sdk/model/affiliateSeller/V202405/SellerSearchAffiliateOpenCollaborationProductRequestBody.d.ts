import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodyCategory } from './SellerSearchAffiliateOpenCollaborationProductRequestBodyCategory';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodyCommissionRateRange } from './SellerSearchAffiliateOpenCollaborationProductRequestBodyCommissionRateRange';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodySalesPriceRange } from './SellerSearchAffiliateOpenCollaborationProductRequestBodySalesPriceRange';
export declare class AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody {
    'category'?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodyCategory;
    'commissionRateRange'?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodyCommissionRateRange;
    'salesPriceRange'?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodySalesPriceRange;
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
//# sourceMappingURL=SellerSearchAffiliateOpenCollaborationProductRequestBody.d.ts.map