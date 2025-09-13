import { Fulfillment202309SchedulePackageHandoverRequestBodyPickupSlot } from './SchedulePackageHandoverRequestBodyPickupSlot';
export declare class Fulfillment202309SchedulePackageHandoverRequestBody {
    'handoverMethod'?: string;
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'pickupSlot'?: Fulfillment202309SchedulePackageHandoverRequestBodyPickupSlot;
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
//# sourceMappingURL=SchedulePackageHandoverRequestBody.d.ts.map