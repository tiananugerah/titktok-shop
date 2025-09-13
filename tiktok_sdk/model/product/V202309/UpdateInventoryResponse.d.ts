import { Product202309UpdateInventoryResponseData } from './UpdateInventoryResponseData';
export declare class Product202309UpdateInventoryResponse {
    'code'?: number;
    'data'?: Product202309UpdateInventoryResponseData;
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
//# sourceMappingURL=UpdateInventoryResponse.d.ts.map