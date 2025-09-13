import { Fulfillment202309GetEligibleShippingServiceRequestBodyDimension } from './GetEligibleShippingServiceRequestBodyDimension';
import { Fulfillment202309GetEligibleShippingServiceRequestBodyWeight } from './GetEligibleShippingServiceRequestBodyWeight';
export declare class Fulfillment202309GetEligibleShippingServiceRequestBody {
    'dimension'?: Fulfillment202309GetEligibleShippingServiceRequestBodyDimension;
    'orderLineItemIds'?: Array<string>;
    'weight'?: Fulfillment202309GetEligibleShippingServiceRequestBodyWeight;
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
//# sourceMappingURL=GetEligibleShippingServiceRequestBody.d.ts.map