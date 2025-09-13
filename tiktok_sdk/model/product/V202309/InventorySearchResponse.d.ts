import { Product202309InventorySearchResponseData } from './InventorySearchResponseData';
export declare class Product202309InventorySearchResponse {
    'code'?: number;
    'data'?: Product202309InventorySearchResponseData;
    'message'?: string;
    'requestId'?: string;
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
//# sourceMappingURL=InventorySearchResponse.d.ts.map