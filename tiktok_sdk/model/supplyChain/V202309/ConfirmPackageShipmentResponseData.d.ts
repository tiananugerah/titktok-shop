import { SupplyChain202309ConfirmPackageShipmentResponseDataErrors } from './ConfirmPackageShipmentResponseDataErrors';
export declare class SupplyChain202309ConfirmPackageShipmentResponseData {
    'errors'?: Array<SupplyChain202309ConfirmPackageShipmentResponseDataErrors>;
    'successPackages'?: Array<string>;
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
//# sourceMappingURL=ConfirmPackageShipmentResponseData.d.ts.map