import { Product202309CreateProductRequestBodySkusCombinedSkus } from './CreateProductRequestBodySkusCombinedSkus';
import { Product202309CreateProductRequestBodySkusExternalListPrices } from './CreateProductRequestBodySkusExternalListPrices';
import { Product202309CreateProductRequestBodySkusIdentifierCode } from './CreateProductRequestBodySkusIdentifierCode';
import { Product202309CreateProductRequestBodySkusInventory } from './CreateProductRequestBodySkusInventory';
import { Product202309CreateProductRequestBodySkusListPrice } from './CreateProductRequestBodySkusListPrice';
import { Product202309CreateProductRequestBodySkusPreSale } from './CreateProductRequestBodySkusPreSale';
import { Product202309CreateProductRequestBodySkusPrice } from './CreateProductRequestBodySkusPrice';
import { Product202309CreateProductRequestBodySkusSalesAttributes } from './CreateProductRequestBodySkusSalesAttributes';
export declare class Product202309CreateProductRequestBodySkus {
    'combinedSkus'?: Array<Product202309CreateProductRequestBodySkusCombinedSkus>;
    'externalListPrices'?: Array<Product202309CreateProductRequestBodySkusExternalListPrices>;
    'externalSkuId'?: string;
    'externalUrls'?: Array<string>;
    'extraIdentifierCodes'?: Array<string>;
    'identifierCode'?: Product202309CreateProductRequestBodySkusIdentifierCode;
    'inventory'?: Array<Product202309CreateProductRequestBodySkusInventory>;
    'listPrice'?: Product202309CreateProductRequestBodySkusListPrice;
    'preSale'?: Product202309CreateProductRequestBodySkusPreSale;
    'price'?: Product202309CreateProductRequestBodySkusPrice;
    'salesAttributes'?: Array<Product202309CreateProductRequestBodySkusSalesAttributes>;
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
//# sourceMappingURL=CreateProductRequestBodySkus.d.ts.map