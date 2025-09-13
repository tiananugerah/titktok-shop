import { Affiliate202309GetShowcaseProductsoldResponseDataProducts } from './GetShowcaseProductsoldResponseDataProducts';
export declare class Affiliate202309GetShowcaseProductsoldResponseData {
    'liveProductIds'?: Array<string>;
    'nextPageToken'?: string;
    'products'?: Array<Affiliate202309GetShowcaseProductsoldResponseDataProducts>;
    'totalCount'?: number;
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
//# sourceMappingURL=GetShowcaseProductsoldResponseData.d.ts.map