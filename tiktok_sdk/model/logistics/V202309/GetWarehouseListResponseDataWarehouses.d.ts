import { Logistics202309GetWarehouseListResponseDataWarehousesAddress } from './GetWarehouseListResponseDataWarehousesAddress';
export declare class Logistics202309GetWarehouseListResponseDataWarehouses {
    'address'?: Logistics202309GetWarehouseListResponseDataWarehousesAddress;
    'effectStatus'?: string;
    'entityId'?: string;
    'id'?: string;
    'isDefault'?: boolean;
    'name'?: string;
    'subType'?: string;
    'type'?: string;
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
//# sourceMappingURL=GetWarehouseListResponseDataWarehouses.d.ts.map