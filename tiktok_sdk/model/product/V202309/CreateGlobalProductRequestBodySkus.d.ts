import { Product202309CreateGlobalProductRequestBodySkusIdentifierCode } from './CreateGlobalProductRequestBodySkusIdentifierCode';
import { Product202309CreateGlobalProductRequestBodySkusInventory } from './CreateGlobalProductRequestBodySkusInventory';
import { Product202309CreateGlobalProductRequestBodySkusPrice } from './CreateGlobalProductRequestBodySkusPrice';
import { Product202309CreateGlobalProductRequestBodySkusSalesAttributes } from './CreateGlobalProductRequestBodySkusSalesAttributes';
export declare class Product202309CreateGlobalProductRequestBodySkus {
    'externalGlobalSkuId'?: string;
    'extraIdentifierCodes'?: Array<string>;
    'globalQuantity'?: number;
    'identifierCode'?: Product202309CreateGlobalProductRequestBodySkusIdentifierCode;
    'inventory'?: Array<Product202309CreateGlobalProductRequestBodySkusInventory>;
    'price'?: Product202309CreateGlobalProductRequestBodySkusPrice;
    'salesAttributes'?: Array<Product202309CreateGlobalProductRequestBodySkusSalesAttributes>;
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
//# sourceMappingURL=CreateGlobalProductRequestBodySkus.d.ts.map