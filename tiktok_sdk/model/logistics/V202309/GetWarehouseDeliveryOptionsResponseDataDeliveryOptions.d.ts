import { Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit } from './GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit';
import { Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit } from './GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit';
export declare class Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions {
    'description'?: string;
    'dimensionLimit'?: Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit;
    'id'?: string;
    'name'?: string;
    'platform'?: Array<string>;
    'type'?: string;
    'weightLimit'?: Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit;
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
//# sourceMappingURL=GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.d.ts.map