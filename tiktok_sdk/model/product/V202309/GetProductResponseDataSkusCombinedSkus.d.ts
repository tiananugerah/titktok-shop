import { Product202309GetProductResponseDataSkusCombinedSkusBrand } from './GetProductResponseDataSkusCombinedSkusBrand';
import { Product202309GetProductResponseDataSkusCombinedSkusCategories } from './GetProductResponseDataSkusCombinedSkusCategories';
import { Product202309GetProductResponseDataSkusCombinedSkusInventory } from './GetProductResponseDataSkusCombinedSkusInventory';
import { Product202309GetProductResponseDataSkusCombinedSkusPrice } from './GetProductResponseDataSkusCombinedSkusPrice';
import { Product202309GetProductResponseDataSkusCombinedSkusProductMainImage } from './GetProductResponseDataSkusCombinedSkusProductMainImage';
import { Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes } from './GetProductResponseDataSkusCombinedSkusSalesAttributes';
export declare class Product202309GetProductResponseDataSkusCombinedSkus {
    'brand'?: Product202309GetProductResponseDataSkusCombinedSkusBrand;
    'categories'?: Array<Product202309GetProductResponseDataSkusCombinedSkusCategories>;
    'combinedListingNotLiveReasons'?: Array<string>;
    'inventory'?: Array<Product202309GetProductResponseDataSkusCombinedSkusInventory>;
    'price'?: Product202309GetProductResponseDataSkusCombinedSkusPrice;
    'productId'?: string;
    'productMainImage'?: Product202309GetProductResponseDataSkusCombinedSkusProductMainImage;
    'salesAttributes'?: Array<Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes>;
    'sellerSku'?: string;
    'skuCount'?: number;
    'skuId'?: string;
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
//# sourceMappingURL=GetProductResponseDataSkusCombinedSkus.d.ts.map