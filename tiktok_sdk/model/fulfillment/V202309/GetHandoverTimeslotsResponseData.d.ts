import { Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots } from './GetHandoverTimeslotsResponseDataPickupSlots';
export declare class Fulfillment202309GetHandoverTimeslotsResponseData {
    'canDropOff'?: boolean;
    'canPickup'?: boolean;
    'canVanCollection'?: boolean;
    'dropOffPointUrl'?: string;
    'pickupSlots'?: Array<Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots>;
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
//# sourceMappingURL=GetHandoverTimeslotsResponseData.d.ts.map