import { Logistics202309GetWarehouseListResponseData } from './GetWarehouseListResponseData';
export declare class Logistics202309GetWarehouseListResponse {
    'code'?: number;
    'data'?: Logistics202309GetWarehouseListResponseData;
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
//# sourceMappingURL=GetWarehouseListResponse.d.ts.map