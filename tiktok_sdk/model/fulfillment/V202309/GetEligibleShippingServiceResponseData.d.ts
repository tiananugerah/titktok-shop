import { Fulfillment202309GetEligibleShippingServiceResponseDataDimension } from './GetEligibleShippingServiceResponseDataDimension';
import { Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices } from './GetEligibleShippingServiceResponseDataShippingServices';
import { Fulfillment202309GetEligibleShippingServiceResponseDataWeight } from './GetEligibleShippingServiceResponseDataWeight';
export declare class Fulfillment202309GetEligibleShippingServiceResponseData {
    'dimension'?: Fulfillment202309GetEligibleShippingServiceResponseDataDimension;
    'orderId'?: string;
    'orderLineId'?: Array<string>;
    'shippingServices'?: Array<Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices>;
    'weight'?: Fulfillment202309GetEligibleShippingServiceResponseDataWeight;
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
//# sourceMappingURL=GetEligibleShippingServiceResponseData.d.ts.map