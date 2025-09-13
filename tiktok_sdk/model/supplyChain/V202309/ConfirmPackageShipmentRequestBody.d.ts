import { SupplyChain202309ConfirmPackageShipmentRequestBodyPackages } from './ConfirmPackageShipmentRequestBodyPackages';
export declare class SupplyChain202309ConfirmPackageShipmentRequestBody {
    'packages'?: Array<SupplyChain202309ConfirmPackageShipmentRequestBodyPackages>;
    'warehouseProviderId'?: string;
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
//# sourceMappingURL=ConfirmPackageShipmentRequestBody.d.ts.map