import { Fulfillment202309CreatePackagesRequestBodyDimension } from './CreatePackagesRequestBodyDimension';
import { Fulfillment202309CreatePackagesRequestBodyWeight } from './CreatePackagesRequestBodyWeight';
export declare class Fulfillment202309CreatePackagesRequestBody {
    'dimension'?: Fulfillment202309CreatePackagesRequestBodyDimension;
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'shippingServiceId'?: string;
    'weight'?: Fulfillment202309CreatePackagesRequestBodyWeight;
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
//# sourceMappingURL=CreatePackagesRequestBody.d.ts.map