import { SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesDimension } from './ConfirmPackageShipmentRequestBodyPackagesDimension';
import { SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesSkus } from './ConfirmPackageShipmentRequestBodyPackagesSkus';
import { SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesWeight } from './ConfirmPackageShipmentRequestBodyPackagesWeight';
export declare class SupplyChain202309ConfirmPackageShipmentRequestBodyPackages {
    'createTimeMillis'?: number;
    'dimension'?: SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesDimension;
    'handoverTimeMillis'?: number;
    'id'?: string;
    'providerWarehouseCode'?: string;
    'providerWarehouseName'?: string;
    'shipTimeMillis'?: number;
    'shippingOriginCity'?: string;
    'shippingProviderId'?: string;
    'shippingProviderName'?: string;
    'skus'?: Array<SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesSkus>;
    'tcwWarehouseType'?: string;
    'timeZone'?: string;
    'trackingNumber'?: string;
    'weight'?: SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesWeight;
    'wmsOrderId'?: string;
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
//# sourceMappingURL=ConfirmPackageShipmentRequestBodyPackages.d.ts.map