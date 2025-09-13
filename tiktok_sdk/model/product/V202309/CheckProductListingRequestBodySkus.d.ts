import { Product202309CheckProductListingRequestBodySkusCombinedSkus } from './CheckProductListingRequestBodySkusCombinedSkus';
import { Product202309CheckProductListingRequestBodySkusExternalListPrices } from './CheckProductListingRequestBodySkusExternalListPrices';
import { Product202309CheckProductListingRequestBodySkusIdentifierCode } from './CheckProductListingRequestBodySkusIdentifierCode';
import { Product202309CheckProductListingRequestBodySkusInventory } from './CheckProductListingRequestBodySkusInventory';
import { Product202309CheckProductListingRequestBodySkusListPrice } from './CheckProductListingRequestBodySkusListPrice';
import { Product202309CheckProductListingRequestBodySkusPreSale } from './CheckProductListingRequestBodySkusPreSale';
import { Product202309CheckProductListingRequestBodySkusPrice } from './CheckProductListingRequestBodySkusPrice';
import { Product202309CheckProductListingRequestBodySkusSalesAttributes } from './CheckProductListingRequestBodySkusSalesAttributes';
export declare class Product202309CheckProductListingRequestBodySkus {
    'combinedSkus'?: Array<Product202309CheckProductListingRequestBodySkusCombinedSkus>;
    'externalListPrices'?: Array<Product202309CheckProductListingRequestBodySkusExternalListPrices>;
    'externalSkuId'?: string;
    'externalUrls'?: Array<string>;
    'extraIdentifierCodes'?: Array<string>;
    'identifierCode'?: Product202309CheckProductListingRequestBodySkusIdentifierCode;
    'inventory'?: Array<Product202309CheckProductListingRequestBodySkusInventory>;
    'listPrice'?: Product202309CheckProductListingRequestBodySkusListPrice;
    'preSale'?: Product202309CheckProductListingRequestBodySkusPreSale;
    'price'?: Product202309CheckProductListingRequestBodySkusPrice;
    'salesAttributes'?: Array<Product202309CheckProductListingRequestBodySkusSalesAttributes>;
    'sellerSku'?: string;
    'skuUnitCount'?: string;
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
//# sourceMappingURL=CheckProductListingRequestBodySkus.d.ts.map