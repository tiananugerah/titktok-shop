import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsAddition } from './GetShowcaseProductsResponseDataProductsAddition';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsCollaboration } from './GetShowcaseProductsResponseDataProductsCollaboration';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsCommission } from './GetShowcaseProductsResponseDataProductsCommission';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsMainImages } from './GetShowcaseProductsResponseDataProductsMainImages';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice } from './GetShowcaseProductsResponseDataProductsPrice';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsShop } from './GetShowcaseProductsResponseDataProductsShop';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsStatus } from './GetShowcaseProductsResponseDataProductsStatus';
export declare class AffiliateCreator202405GetShowcaseProductsResponseDataProducts {
    'addition'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsAddition;
    'collaboration'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsCollaboration;
    'commission'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsCommission;
    'detailLink'?: string;
    'id'?: string;
    'mainImages'?: Array<AffiliateCreator202405GetShowcaseProductsResponseDataProductsMainImages>;
    'price'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice;
    'saleRegions'?: Array<string>;
    'shop'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsShop;
    'source'?: string;
    'status'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsStatus;
    'thirdPartyLink'?: string;
    'title'?: string;
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
//# sourceMappingURL=GetShowcaseProductsResponseDataProducts.d.ts.map