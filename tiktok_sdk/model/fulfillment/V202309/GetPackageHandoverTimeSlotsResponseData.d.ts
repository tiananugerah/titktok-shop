import { Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots } from './GetPackageHandoverTimeSlotsResponseDataPickupSlots';
export declare class Fulfillment202309GetPackageHandoverTimeSlotsResponseData {
    'canDropOff'?: boolean;
    'canPickup'?: boolean;
    'canVanCollection'?: boolean;
    'dropOffPointUrl'?: string;
    'pickupSlots'?: Array<Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots>;
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
//# sourceMappingURL=GetPackageHandoverTimeSlotsResponseData.d.ts.map