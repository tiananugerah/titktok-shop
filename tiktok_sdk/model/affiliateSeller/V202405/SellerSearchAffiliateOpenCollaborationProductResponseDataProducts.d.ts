import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCategoryChains } from './SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCategoryChains';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCommission } from './SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCommission';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsOriginalPrice } from './SellerSearchAffiliateOpenCollaborationProductResponseDataProductsOriginalPrice';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsSalesPrice } from './SellerSearchAffiliateOpenCollaborationProductResponseDataProductsSalesPrice';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsShop } from './SellerSearchAffiliateOpenCollaborationProductResponseDataProductsShop';
export declare class AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts {
    'categoryChains'?: Array<AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCategoryChains>;
    'commission'?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCommission;
    'detailLink'?: string;
    'hasInventory'?: boolean;
    'id'?: string;
    'mainImageUrl'?: string;
    'originalPrice'?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsOriginalPrice;
    'saleRegion'?: string;
    'salesPrice'?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsSalesPrice;
    'shop'?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsShop;
    'title'?: string;
    'unitsSold'?: number;
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
//# sourceMappingURL=SellerSearchAffiliateOpenCollaborationProductResponseDataProducts.d.ts.map