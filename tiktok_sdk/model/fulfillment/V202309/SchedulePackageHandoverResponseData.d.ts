import { Fulfillment202309SchedulePackageHandoverResponseDataDimension } from './SchedulePackageHandoverResponseDataDimension';
import { Fulfillment202309SchedulePackageHandoverResponseDataWeight } from './SchedulePackageHandoverResponseDataWeight';
export declare class Fulfillment202309SchedulePackageHandoverResponseData {
    'createTime'?: number;
    'dimension'?: Fulfillment202309SchedulePackageHandoverResponseDataDimension;
    'handoverMethod'?: string;
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'packageId'?: string;
    'shippingProviderId'?: string;
    'shippingProviderName'?: string;
    'trackingNumber'?: string;
    'updateTime'?: number;
    'weight'?: Fulfillment202309SchedulePackageHandoverResponseDataWeight;
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
//# sourceMappingURL=SchedulePackageHandoverResponseData.d.ts.map