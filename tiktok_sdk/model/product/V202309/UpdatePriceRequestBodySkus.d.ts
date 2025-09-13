import { Product202309UpdatePriceRequestBodySkusExternalListPrices } from './UpdatePriceRequestBodySkusExternalListPrices';
import { Product202309UpdatePriceRequestBodySkusListPrice } from './UpdatePriceRequestBodySkusListPrice';
import { Product202309UpdatePriceRequestBodySkusPrice } from './UpdatePriceRequestBodySkusPrice';
export declare class Product202309UpdatePriceRequestBodySkus {
    'externalListPrices'?: Array<Product202309UpdatePriceRequestBodySkusExternalListPrices>;
    'id'?: string;
    'listPrice'?: Product202309UpdatePriceRequestBodySkusListPrice;
    'price'?: Product202309UpdatePriceRequestBodySkusPrice;
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
//# sourceMappingURL=UpdatePriceRequestBodySkus.d.ts.map