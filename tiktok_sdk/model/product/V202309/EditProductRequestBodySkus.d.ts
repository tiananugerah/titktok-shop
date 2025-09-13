import { Product202309EditProductRequestBodySkusCombinedSkus } from './EditProductRequestBodySkusCombinedSkus';
import { Product202309EditProductRequestBodySkusExternalListPrices } from './EditProductRequestBodySkusExternalListPrices';
import { Product202309EditProductRequestBodySkusIdentifierCode } from './EditProductRequestBodySkusIdentifierCode';
import { Product202309EditProductRequestBodySkusInventory } from './EditProductRequestBodySkusInventory';
import { Product202309EditProductRequestBodySkusListPrice } from './EditProductRequestBodySkusListPrice';
import { Product202309EditProductRequestBodySkusPreSale } from './EditProductRequestBodySkusPreSale';
import { Product202309EditProductRequestBodySkusPrice } from './EditProductRequestBodySkusPrice';
import { Product202309EditProductRequestBodySkusSalesAttributes } from './EditProductRequestBodySkusSalesAttributes';
export declare class Product202309EditProductRequestBodySkus {
    'combinedSkus'?: Array<Product202309EditProductRequestBodySkusCombinedSkus>;
    'externalListPrices'?: Array<Product202309EditProductRequestBodySkusExternalListPrices>;
    'externalSkuId'?: string;
    'externalUrls'?: Array<string>;
    'extraIdentifierCodes'?: Array<string>;
    'id'?: string;
    'identifierCode'?: Product202309EditProductRequestBodySkusIdentifierCode;
    'inventory'?: Array<Product202309EditProductRequestBodySkusInventory>;
    'listPrice'?: Product202309EditProductRequestBodySkusListPrice;
    'preSale'?: Product202309EditProductRequestBodySkusPreSale;
    'price'?: Product202309EditProductRequestBodySkusPrice;
    'salesAttributes'?: Array<Product202309EditProductRequestBodySkusSalesAttributes>;
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
//# sourceMappingURL=EditProductRequestBodySkus.d.ts.map