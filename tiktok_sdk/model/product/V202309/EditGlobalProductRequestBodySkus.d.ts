import { Product202309EditGlobalProductRequestBodySkusIdentifierCode } from './EditGlobalProductRequestBodySkusIdentifierCode';
import { Product202309EditGlobalProductRequestBodySkusInventory } from './EditGlobalProductRequestBodySkusInventory';
import { Product202309EditGlobalProductRequestBodySkusPrice } from './EditGlobalProductRequestBodySkusPrice';
import { Product202309EditGlobalProductRequestBodySkusSalePrices } from './EditGlobalProductRequestBodySkusSalePrices';
import { Product202309EditGlobalProductRequestBodySkusSalesAttributes } from './EditGlobalProductRequestBodySkusSalesAttributes';
export declare class Product202309EditGlobalProductRequestBodySkus {
    'externalGlobalSkuId'?: string;
    'extraIdentifierCodes'?: Array<string>;
    'globalQuantity'?: number;
    'id'?: string;
    'identifierCode'?: Product202309EditGlobalProductRequestBodySkusIdentifierCode;
    'inventory'?: Array<Product202309EditGlobalProductRequestBodySkusInventory>;
    'price'?: Product202309EditGlobalProductRequestBodySkusPrice;
    'salePrices'?: Array<Product202309EditGlobalProductRequestBodySkusSalePrices>;
    'salesAttributes'?: Array<Product202309EditGlobalProductRequestBodySkusSalesAttributes>;
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
//# sourceMappingURL=EditGlobalProductRequestBodySkus.d.ts.map