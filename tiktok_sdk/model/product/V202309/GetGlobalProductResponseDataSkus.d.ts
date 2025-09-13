import { Product202309GetGlobalProductResponseDataSkusIdentifierCode } from './GetGlobalProductResponseDataSkusIdentifierCode';
import { Product202309GetGlobalProductResponseDataSkusInventory } from './GetGlobalProductResponseDataSkusInventory';
import { Product202309GetGlobalProductResponseDataSkusPrice } from './GetGlobalProductResponseDataSkusPrice';
import { Product202309GetGlobalProductResponseDataSkusSalesAttributes } from './GetGlobalProductResponseDataSkusSalesAttributes';
export declare class Product202309GetGlobalProductResponseDataSkus {
    'externalGlobalSkuId'?: string;
    'extraIdentifierCodes'?: Array<string>;
    'globalQuantity'?: number;
    'id'?: string;
    'identifierCode'?: Product202309GetGlobalProductResponseDataSkusIdentifierCode;
    'inventory'?: Array<Product202309GetGlobalProductResponseDataSkusInventory>;
    'price'?: Product202309GetGlobalProductResponseDataSkusPrice;
    'salesAttributes'?: Array<Product202309GetGlobalProductResponseDataSkusSalesAttributes>;
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
//# sourceMappingURL=GetGlobalProductResponseDataSkus.d.ts.map