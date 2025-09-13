import { Affiliate202309GetShowcaseProductsoldResponseDataProductsAddition } from './GetShowcaseProductsoldResponseDataProductsAddition';
import { Affiliate202309GetShowcaseProductsoldResponseDataProductsCommission } from './GetShowcaseProductsoldResponseDataProductsCommission';
import { Affiliate202309GetShowcaseProductsoldResponseDataProductsMainImages } from './GetShowcaseProductsoldResponseDataProductsMainImages';
import { Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice } from './GetShowcaseProductsoldResponseDataProductsPrice';
import { Affiliate202309GetShowcaseProductsoldResponseDataProductsStatus } from './GetShowcaseProductsoldResponseDataProductsStatus';
export declare class Affiliate202309GetShowcaseProductsoldResponseDataProducts {
    'addition'?: Affiliate202309GetShowcaseProductsoldResponseDataProductsAddition;
    'commission'?: Affiliate202309GetShowcaseProductsoldResponseDataProductsCommission;
    'detailUrl'?: string;
    'id'?: string;
    'mainImages'?: Array<Affiliate202309GetShowcaseProductsoldResponseDataProductsMainImages>;
    'originalUrl'?: string;
    'price'?: Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice;
    'saleRegions'?: Array<string>;
    'shopName'?: string;
    'source'?: string;
    'status'?: Affiliate202309GetShowcaseProductsoldResponseDataProductsStatus;
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
//# sourceMappingURL=GetShowcaseProductsoldResponseDataProducts.d.ts.map