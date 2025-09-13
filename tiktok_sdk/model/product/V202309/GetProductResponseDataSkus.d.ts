import { Product202309GetProductResponseDataSkusCombinedSkus } from './GetProductResponseDataSkusCombinedSkus';
import { Product202309GetProductResponseDataSkusExternalListPrices } from './GetProductResponseDataSkusExternalListPrices';
import { Product202309GetProductResponseDataSkusGlobalListingPolicy } from './GetProductResponseDataSkusGlobalListingPolicy';
import { Product202309GetProductResponseDataSkusIdentifierCode } from './GetProductResponseDataSkusIdentifierCode';
import { Product202309GetProductResponseDataSkusInventory } from './GetProductResponseDataSkusInventory';
import { Product202309GetProductResponseDataSkusListPrice } from './GetProductResponseDataSkusListPrice';
import { Product202309GetProductResponseDataSkusPreSale } from './GetProductResponseDataSkusPreSale';
import { Product202309GetProductResponseDataSkusPrice } from './GetProductResponseDataSkusPrice';
import { Product202309GetProductResponseDataSkusSalesAttributes } from './GetProductResponseDataSkusSalesAttributes';
import { Product202309GetProductResponseDataSkusStatusInfo } from './GetProductResponseDataSkusStatusInfo';
export declare class Product202309GetProductResponseDataSkus {
    'combinedSkus'?: Array<Product202309GetProductResponseDataSkusCombinedSkus>;
    'externalListPrices'?: Array<Product202309GetProductResponseDataSkusExternalListPrices>;
    'externalSkuId'?: string;
    'externalUrls'?: Array<string>;
    'extraIdentifierCodes'?: Array<string>;
    'globalListingPolicy'?: Product202309GetProductResponseDataSkusGlobalListingPolicy;
    'id'?: string;
    'identifierCode'?: Product202309GetProductResponseDataSkusIdentifierCode;
    'inventory'?: Array<Product202309GetProductResponseDataSkusInventory>;
    'listPrice'?: Product202309GetProductResponseDataSkusListPrice;
    'preSale'?: Product202309GetProductResponseDataSkusPreSale;
    'price'?: Product202309GetProductResponseDataSkusPrice;
    'salesAttributes'?: Array<Product202309GetProductResponseDataSkusSalesAttributes>;
    'sellerSku'?: string;
    'skuUnitCount'?: string;
    'statusInfo'?: Product202309GetProductResponseDataSkusStatusInfo;
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
//# sourceMappingURL=GetProductResponseDataSkus.d.ts.map