import { Fulfillment202309CreatePackagesResponseDataDimension } from './CreatePackagesResponseDataDimension';
import { Fulfillment202309CreatePackagesResponseDataShippingServiceInfo } from './CreatePackagesResponseDataShippingServiceInfo';
import { Fulfillment202309CreatePackagesResponseDataWeight } from './CreatePackagesResponseDataWeight';
export declare class Fulfillment202309CreatePackagesResponseData {
    'createTime'?: number;
    'dimension'?: Fulfillment202309CreatePackagesResponseDataDimension;
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'packageId'?: string;
    'shippingServiceInfo'?: Fulfillment202309CreatePackagesResponseDataShippingServiceInfo;
    'weight'?: Fulfillment202309CreatePackagesResponseDataWeight;
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
//# sourceMappingURL=CreatePackagesResponseData.d.ts.map