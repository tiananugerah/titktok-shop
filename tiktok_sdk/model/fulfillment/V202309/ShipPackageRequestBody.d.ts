import { Fulfillment202309ShipPackageRequestBodyPickupSlot } from './ShipPackageRequestBodyPickupSlot';
import { Fulfillment202309ShipPackageRequestBodySelfShipment } from './ShipPackageRequestBodySelfShipment';
export declare class Fulfillment202309ShipPackageRequestBody {
    'handoverMethod'?: string;
    'pickupSlot'?: Fulfillment202309ShipPackageRequestBodyPickupSlot;
    'selfShipment'?: Fulfillment202309ShipPackageRequestBodySelfShipment;
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
//# sourceMappingURL=ShipPackageRequestBody.d.ts.map