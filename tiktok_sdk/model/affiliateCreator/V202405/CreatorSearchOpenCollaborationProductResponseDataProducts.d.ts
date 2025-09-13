import { AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsCategoryChains } from './CreatorSearchOpenCollaborationProductResponseDataProductsCategoryChains';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsCommission } from './CreatorSearchOpenCollaborationProductResponseDataProductsCommission';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsOriginalPrice } from './CreatorSearchOpenCollaborationProductResponseDataProductsOriginalPrice';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsSalesPrice } from './CreatorSearchOpenCollaborationProductResponseDataProductsSalesPrice';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsShop } from './CreatorSearchOpenCollaborationProductResponseDataProductsShop';
export declare class AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts {
    'categoryChains'?: Array<AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsCategoryChains>;
    'commission'?: AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsCommission;
    'detailLink'?: string;
    'hasInventory'?: boolean;
    'id'?: string;
    'mainImageUrl'?: string;
    'originalPrice'?: AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsOriginalPrice;
    'saleRegion'?: string;
    'salesPrice'?: AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsSalesPrice;
    'shop'?: AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsShop;
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
//# sourceMappingURL=CreatorSearchOpenCollaborationProductResponseDataProducts.d.ts.map