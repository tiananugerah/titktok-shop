import { Fulfillment202309SearchPackageResponseDataPackagesOrders } from './SearchPackageResponseDataPackagesOrders';
export declare class Fulfillment202309SearchPackageResponseDataPackages {
    'createTime'?: number;
    'id'?: string;
    'orderLineItemIds'?: Array<string>;
    'orders'?: Array<Fulfillment202309SearchPackageResponseDataPackagesOrders>;
    'shippingProviderId'?: string;
    'shippingProviderName'?: string;
    'status'?: string;
    'trackingNumber'?: string;
    'updateTime'?: number;
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
//# sourceMappingURL=SearchPackageResponseDataPackages.d.ts.map