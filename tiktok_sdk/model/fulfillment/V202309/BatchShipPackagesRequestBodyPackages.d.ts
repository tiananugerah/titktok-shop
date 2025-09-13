import { Fulfillment202309BatchShipPackagesRequestBodyPackagesPickupSlot } from './BatchShipPackagesRequestBodyPackagesPickupSlot';
import { Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment } from './BatchShipPackagesRequestBodyPackagesSelfShipment';
export declare class Fulfillment202309BatchShipPackagesRequestBodyPackages {
    'handoverMethod'?: string;
    'id'?: string;
    'pickupSlot'?: Fulfillment202309BatchShipPackagesRequestBodyPackagesPickupSlot;
    'selfShipment'?: Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment;
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
//# sourceMappingURL=BatchShipPackagesRequestBodyPackages.d.ts.map