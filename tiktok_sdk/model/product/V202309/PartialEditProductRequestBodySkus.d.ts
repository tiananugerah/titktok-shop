import { Product202309PartialEditProductRequestBodySkusExternalListPrices } from './PartialEditProductRequestBodySkusExternalListPrices';
import { Product202309PartialEditProductRequestBodySkusIdentifierCode } from './PartialEditProductRequestBodySkusIdentifierCode';
import { Product202309PartialEditProductRequestBodySkusInventory } from './PartialEditProductRequestBodySkusInventory';
import { Product202309PartialEditProductRequestBodySkusListPrice } from './PartialEditProductRequestBodySkusListPrice';
import { Product202309PartialEditProductRequestBodySkusPreSale } from './PartialEditProductRequestBodySkusPreSale';
import { Product202309PartialEditProductRequestBodySkusPrice } from './PartialEditProductRequestBodySkusPrice';
import { Product202309PartialEditProductRequestBodySkusSalesAttributes } from './PartialEditProductRequestBodySkusSalesAttributes';
export declare class Product202309PartialEditProductRequestBodySkus {
    'externalListPrices'?: Array<Product202309PartialEditProductRequestBodySkusExternalListPrices>;
    'externalSkuId'?: string;
    'externalUrls'?: Array<string>;
    'extraIdentifierCodes'?: Array<string>;
    'id'?: string;
    'identifierCode'?: Product202309PartialEditProductRequestBodySkusIdentifierCode;
    'inventory'?: Array<Product202309PartialEditProductRequestBodySkusInventory>;
    'listPrice'?: Product202309PartialEditProductRequestBodySkusListPrice;
    'preSale'?: Product202309PartialEditProductRequestBodySkusPreSale;
    'price'?: Product202309PartialEditProductRequestBodySkusPrice;
    'salesAttributes'?: Array<Product202309PartialEditProductRequestBodySkusSalesAttributes>;
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
//# sourceMappingURL=PartialEditProductRequestBodySkus.d.ts.map